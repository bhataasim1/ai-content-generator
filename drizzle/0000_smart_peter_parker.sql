CREATE TABLE IF NOT EXISTS "courseList" (
	"id" serial PRIMARY KEY NOT NULL,
	"courseId" varchar NOT NULL,
	"name" varchar NOT NULL,
	"category" varchar NOT NULL,
	"courseOutput" json NOT NULL,
	"username" varchar,
	"userprofileimage" varchar,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL
);
