// validators/test.validator.js
import { z } from "zod";
import { questionLevels } from "../config/test.config.js";

// ==== Схеми ====

const answerSchemaValidator = z.object({
  text: z.string().min(1, "Введіть текст відповіді"),
  right: z.boolean().default(false)
});

const questionSchemaValidator = z.object({
  text: z.string().min(1, "Введіть текст питання"),
  level: z.enum(questionLevels, {
    errorMap: () => ({ message: "Некоректний рівень питання" })
  }),
  order: z.number().default(999),
  answers: z.array(answerSchemaValidator).min(2, "Введіть хоча б 2 відповіді")
});

// Валідатор для СТВОРЕННЯ тесту
const createTestSchemaValidator = z.object({
  name: z.string().min(1, "Введіть ім'я тесту"),
  showOnSite: z.boolean().default(false),
  questions: z.array(questionSchemaValidator).default([])
});

// Валідатор для РЕДАГУВАННЯ тесту (усі поля опціональні)
const updateTestSchemaValidator = createTestSchemaValidator.partial();

// ==== Мідлвар ====

const checkTest = (schema) => (req, res, next) => {
  const result = schema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      message: "Помилка валідації",
      errors: result.error.flatten().fieldErrors
    });
  }

  req.body = result.data;
  next();
};

export { createTestSchemaValidator, updateTestSchemaValidator, checkTest };