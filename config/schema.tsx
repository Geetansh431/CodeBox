import {
  integer,
  pgTable,
  varchar,
  json,
  timestamp,
} from 'drizzle-orm/pg-core';

export const usersTable = pgTable('users', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  password: varchar({ length: 255 }).default(''),
  points: integer().default(0),
  subscription: varchar(),
  createdAt: timestamp().defaultNow(),
  streak: integer().default(0),
  lastActivityDate: varchar({ length: 10 }), // Format: YYYY-MM-DD
  longestStreak: integer().default(0),
  referredBy: integer(),
});

export const CoursesTable = pgTable('courses', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  courseId: integer().notNull().unique(),
  title: varchar().notNull(),
  desc: varchar().notNull(),
  bannerImage: varchar().notNull(),
  level: varchar().default('Beginner'),
  tags: varchar(),
  editorType: varchar(),
});

export const CourseChaptersTable = pgTable('courseChapters', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  chapterId: integer(),
  courseId: integer().notNull(),
  name: varchar(),
  desc: varchar(),
  exercises: json(),
});

export const EnrolledCourseTable = pgTable('enrollCourse', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  courseId: integer(),
  userId: varchar(),
  enrolledDate: timestamp().defaultNow(),
  xpEarned: integer(),
});

export const CompletedExerciseTable = pgTable('completedExercise', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  courseId: integer(),
  chapterId: integer(),
  exerciseId: integer(),
  userId: varchar(),
});

export const ExerciseTable = pgTable('exercise', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  courseId: integer(),
  chapterId: integer(),
  exerciseId: varchar(),
  exerciseContent: json(),
  exerciseName: varchar(),
});

export const PaymentsTable = pgTable('payments', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  userId: integer().notNull(),
  orderId: varchar().notNull(),
  paymentId: varchar(),
  amount: integer().notNull(),
  currency: varchar().default('INR'),
  planType: varchar().notNull(),
  status: varchar().default('created'),
  createdAt: timestamp().defaultNow(),
  updatedAt: timestamp().defaultNow(),
});

export const InvitationsTable = pgTable('invitations', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  inviterId: integer().notNull(),
  inviteeEmail: varchar({ length: 255 }).notNull(),
  referralCode: varchar({ length: 20 }).notNull().unique(),
  status: varchar({ length: 20 }).default('pending'), // pending, accepted
  createdAt: timestamp().defaultNow(),
});

export const ContactTable = pgTable('contact', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull(),
  subject: varchar({ length: 255 }).notNull(),
  message: varchar({ length: 5000 }).notNull(),
  status: varchar().default('new'), // new, read, replied
  createdAt: timestamp().defaultNow(),
});
