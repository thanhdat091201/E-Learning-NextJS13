import { getProgress } from "@/actions/get-progress";
import { afterEach, describe, expect, test, vi } from "vitest";
import prisma from "@/lib/__mocks__/prisma";

const userId = "user_2XIYQtxKjkZSqWOBkBpekcS2TmL";
const courseId = "653b4d8f3782fcbc8ae705fb";

vi.mock("../lib/db");

describe("getProgress()", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });
  // test("getProgress should calculate progress percentage correctly", async () => {
  //   const mockPublishedChapters = [
  //     {
  //       id: "653b7bbf3782fcbc8ae705fc",
  //       title: "1. Welcome to the Course!",
  //       position: 1,
  //       isPublished: true,
  //       isFree: true,
  //       courseId: "653b4d8f3782fcbc8ae705fb",
  //       createdAt: new Date("2023-10-27T08:58:39.828Z"),
  //       updatedAt: new Date("2023-10-28T08:42:57.825Z"),
  //       description:
  //         "<p>Are you interested in becoming a programmer? <u>Perhaps Python</u> has caught your attention? If you're looking for a quick brush-up or starting to learn <strong>Python</strong> for the first time, you're in the right place!</p><p><br></p><p>Let's begin our journey with one of the most beginner-friendly programming languages available today. Don't worry if you haven't coded before. By the end of this course, you'll be a <em>Python pro!</em></p>",
  //       videoUrl:
  //         "https://utfs.io/f/abdbcbe7-bf7b-4dde-8b21-17000ef4f1a3-p7o6nl.mp4",
  //     },
  //     {
  //       id: "653b80303782fcbc8ae705ff",
  //       title: "2. Read this before starting the course!",
  //       position: 2,
  //       isPublished: true,
  //       isFree: false,
  //       courseId: "653b4d8f3782fcbc8ae705fb",
  //       createdAt: new Date("2023-10-27T09:17:36.358Z"),
  //       updatedAt: new Date("2023-10-28T08:43:33.226Z"),
  //       description:
  //         '<p><strong>Read this before starting the course!</strong></p><p><strong>May 24, 2023:&nbsp;</strong>This course recently got a massive update - if you want to watch the old content, you can find it on YouTube<strong>&nbsp;</strong><a href="https://www.youtube.com/playlist?list=PLB5jA40tNf3scN7gwpDOx0gBm-otmXVoz" rel="noopener noreferrer" target="_blank" style="color: rgb(86, 36, 208);"><strong>here</strong></a><strong>.</strong></p><p>----------------------</p><p>Hey there! Before you dive right into the world of Python Programming, there are a couple of requests I\'d like to make.</p><ol><li>Check out my&nbsp;<a href="https://www.youtube.com/c/TheCodex" rel="noopener noreferrer" target="_blank" style="color: rgb(86, 36, 208);"><strong>YouTube Channel</strong></a>.</li><li>Take a look at&nbsp;<a href="http://thecodex.me/" rel="noopener noreferrer" target="_blank" style="color: rgb(86, 36, 208);"><strong>TheCodex</strong></a>. It\'s a platform I\'ve been working on for several years now to create the best content on Python Programming. While this Udemy course covers the fundamentals of Python Programming, on TheCodex you\'ll find<strong>&nbsp;</strong>comprehensive courses and projects to enroll and learn from, several for free, no registration required.</li></ol><p>----------------------</p><p>Also, I\'m working on making this course&nbsp;<strong>multi-lingual.</strong></p><p><br></p><p>Imagine watching this course in&nbsp;<strong>Hindi</strong>.<strong>&nbsp;Spanish.</strong>&nbsp;<strong>French.</strong>&nbsp;If English isn\'t your native language and you\'d prefer a different language, shoot me a quick&nbsp;<a href="mailto:avinash@thecodex.me" rel="noopener noreferrer" target="_blank" style="color: rgb(86, 36, 208);"><strong>email</strong></a>&nbsp;with which language you\'d prefer.</p><p><br></p><p><a href="https://udemy.com/intro-to-python-hindi" rel="noopener noreferrer" target="_blank" style="color: rgb(86, 36, 208);"><strong>Hindi is now live!</strong></a><strong>&nbsp;</strong>If Hindi is your native language, I would love for you to watch this course and give me feedback.</p><p><br></p><p>Best,</p><p>Avinash</p>',
  //       videoUrl:
  //         "https://utfs.io/f/33e4f4bc-8af1-48f8-8def-280e3bdda75e-p7o6nm.mp4",
  //     },
  //   ];

  //   const mockValidCompletedChapters = 2;

  //   prisma.chapter.findMany.mockResolvedValue(mockPublishedChapters);
  //   prisma.userProgress.count.mockResolvedValue(mockValidCompletedChapters);

  //   const mockProgress =
  //     (mockValidCompletedChapters / mockPublishedChapters.length) * 100;

  //   const progressPercentage = await getProgress(userId, courseId);

  //   expect(progressPercentage).toBe(mockProgress);
  // });

  // test("getProgress should return 0 when inValid courseId or userId", async () => {
  //   prisma.chapter.findMany.mockResolvedValue([]);
  //   const getProgressChapter = vi.fn(getProgress);
  //   const progress = await getProgressChapter(
  //     "abc",
  //     "653b4d8f3782fcbc8ae705fb"
  //   );

  //   expect(getProgressChapter).toHaveReturned();
  //   expect(progress).toBeDefined();
  //   expect(progress).toBe(0);
  // });

  test("should return 0 when there are published chapters but no completed progress", async () => {
    const result = await getProgress(userId, "653b4d8f3782fcbc8ae705fc");
    expect(result).toBe(0);
  });

  test("should return the correct progress percentage", async () => {
    const mockPublishedChapters = [
      {
        id: "653b7bbf3782fcbc8ae705fc",
        title: "1. Welcome to the Course!",
        position: 1,
        isPublished: true,
        isFree: true,
        courseId: "653b4d8f3782fcbc8ae705fb",
        createdAt: new Date("2023-10-27T08:58:39.828Z"),
        updatedAt: new Date("2023-10-28T08:42:57.825Z"),
        description:
          "<p>Are you interested in becoming a programmer? <u>Perhaps Python</u> has caught your attention? If you're looking for a quick brush-up or starting to learn <strong>Python</strong> for the first time, you're in the right place!</p><p><br></p><p>Let's begin our journey with one of the most beginner-friendly programming languages available today. Don't worry if you haven't coded before. By the end of this course, you'll be a <em>Python pro!</em></p>",
        videoUrl:
          "https://utfs.io/f/abdbcbe7-bf7b-4dde-8b21-17000ef4f1a3-p7o6nl.mp4",
      },
      {
        id: "653b80303782fcbc8ae705ff",
        title: "2. Read this before starting the course!",
        position: 2,
        isPublished: true,
        isFree: false,
        courseId: "653b4d8f3782fcbc8ae705fb",
        createdAt: new Date("2023-10-27T09:17:36.358Z"),
        updatedAt: new Date("2023-10-28T08:43:33.226Z"),
        description:
          '<p><strong>Read this before starting the course!</strong></p><p><strong>May 24, 2023:&nbsp;</strong>This course recently got a massive update - if you want to watch the old content, you can find it on YouTube<strong>&nbsp;</strong><a href="https://www.youtube.com/playlist?list=PLB5jA40tNf3scN7gwpDOx0gBm-otmXVoz" rel="noopener noreferrer" target="_blank" style="color: rgb(86, 36, 208);"><strong>here</strong></a><strong>.</strong></p><p>----------------------</p><p>Hey there! Before you dive right into the world of Python Programming, there are a couple of requests I\'d like to make.</p><ol><li>Check out my&nbsp;<a href="https://www.youtube.com/c/TheCodex" rel="noopener noreferrer" target="_blank" style="color: rgb(86, 36, 208);"><strong>YouTube Channel</strong></a>.</li><li>Take a look at&nbsp;<a href="http://thecodex.me/" rel="noopener noreferrer" target="_blank" style="color: rgb(86, 36, 208);"><strong>TheCodex</strong></a>. It\'s a platform I\'ve been working on for several years now to create the best content on Python Programming. While this Udemy course covers the fundamentals of Python Programming, on TheCodex you\'ll find<strong>&nbsp;</strong>comprehensive courses and projects to enroll and learn from, several for free, no registration required.</li></ol><p>----------------------</p><p>Also, I\'m working on making this course&nbsp;<strong>multi-lingual.</strong></p><p><br></p><p>Imagine watching this course in&nbsp;<strong>Hindi</strong>.<strong>&nbsp;Spanish.</strong>&nbsp;<strong>French.</strong>&nbsp;If English isn\'t your native language and you\'d prefer a different language, shoot me a quick&nbsp;<a href="mailto:avinash@thecodex.me" rel="noopener noreferrer" target="_blank" style="color: rgb(86, 36, 208);"><strong>email</strong></a>&nbsp;with which language you\'d prefer.</p><p><br></p><p><a href="https://udemy.com/intro-to-python-hindi" rel="noopener noreferrer" target="_blank" style="color: rgb(86, 36, 208);"><strong>Hindi is now live!</strong></a><strong>&nbsp;</strong>If Hindi is your native language, I would love for you to watch this course and give me feedback.</p><p><br></p><p>Best,</p><p>Avinash</p>',
        videoUrl:
          "https://utfs.io/f/33e4f4bc-8af1-48f8-8def-280e3bdda75e-p7o6nm.mp4",
      },
    ];

    const mockValidCompletedChapters = 2;

    prisma.chapter.findMany.mockResolvedValue(mockPublishedChapters);
    prisma.userProgress.count.mockResolvedValue(mockValidCompletedChapters);

    const mockProgress =
      (mockValidCompletedChapters / mockPublishedChapters.length) * 100;

    const progressPercentage = await getProgress(userId, courseId);

    expect(progressPercentage).toBe(mockProgress);
  });

  test("should return the correct progress percentage", async () => {
    const mockPublishedChapters = [
      {
        id: "653b7bbf3782fcbc8ae705fc",
        title: "1. Welcome to the Course!",
        position: 1,
        isPublished: true,
        isFree: true,
        courseId: "653b4d8f3782fcbc8ae705fb",
        createdAt: new Date("2023-10-27T08:58:39.828Z"),
        updatedAt: new Date("2023-10-28T08:42:57.825Z"),
        description:
          "<p>Are you interested in becoming a programmer? <u>Perhaps Python</u> has caught your attention? If you're looking for a quick brush-up or starting to learn <strong>Python</strong> for the first time, you're in the right place!</p><p><br></p><p>Let's begin our journey with one of the most beginner-friendly programming languages available today. Don't worry if you haven't coded before. By the end of this course, you'll be a <em>Python pro!</em></p>",
        videoUrl:
          "https://utfs.io/f/abdbcbe7-bf7b-4dde-8b21-17000ef4f1a3-p7o6nl.mp4",
      },
      {
        id: "653b80303782fcbc8ae705ff",
        title: "2. Read this before starting the course!",
        position: 2,
        isPublished: true,
        isFree: false,
        courseId: "653b4d8f3782fcbc8ae705fb",
        createdAt: new Date("2023-10-27T09:17:36.358Z"),
        updatedAt: new Date("2023-10-28T08:43:33.226Z"),
        description:
          '<p><strong>Read this before starting the course!</strong></p><p><strong>May 24, 2023:&nbsp;</strong>This course recently got a massive update - if you want to watch the old content, you can find it on YouTube<strong>&nbsp;</strong><a href="https://www.youtube.com/playlist?list=PLB5jA40tNf3scN7gwpDOx0gBm-otmXVoz" rel="noopener noreferrer" target="_blank" style="color: rgb(86, 36, 208);"><strong>here</strong></a><strong>.</strong></p><p>----------------------</p><p>Hey there! Before you dive right into the world of Python Programming, there are a couple of requests I\'d like to make.</p><ol><li>Check out my&nbsp;<a href="https://www.youtube.com/c/TheCodex" rel="noopener noreferrer" target="_blank" style="color: rgb(86, 36, 208);"><strong>YouTube Channel</strong></a>.</li><li>Take a look at&nbsp;<a href="http://thecodex.me/" rel="noopener noreferrer" target="_blank" style="color: rgb(86, 36, 208);"><strong>TheCodex</strong></a>. It\'s a platform I\'ve been working on for several years now to create the best content on Python Programming. While this Udemy course covers the fundamentals of Python Programming, on TheCodex you\'ll find<strong>&nbsp;</strong>comprehensive courses and projects to enroll and learn from, several for free, no registration required.</li></ol><p>----------------------</p><p>Also, I\'m working on making this course&nbsp;<strong>multi-lingual.</strong></p><p><br></p><p>Imagine watching this course in&nbsp;<strong>Hindi</strong>.<strong>&nbsp;Spanish.</strong>&nbsp;<strong>French.</strong>&nbsp;If English isn\'t your native language and you\'d prefer a different language, shoot me a quick&nbsp;<a href="mailto:avinash@thecodex.me" rel="noopener noreferrer" target="_blank" style="color: rgb(86, 36, 208);"><strong>email</strong></a>&nbsp;with which language you\'d prefer.</p><p><br></p><p><a href="https://udemy.com/intro-to-python-hindi" rel="noopener noreferrer" target="_blank" style="color: rgb(86, 36, 208);"><strong>Hindi is now live!</strong></a><strong>&nbsp;</strong>If Hindi is your native language, I would love for you to watch this course and give me feedback.</p><p><br></p><p>Best,</p><p>Avinash</p>',
        videoUrl:
          "https://utfs.io/f/33e4f4bc-8af1-48f8-8def-280e3bdda75e-p7o6nm.mp4",
      },
    ];

    const mockValidCompletedChapters = 2;

    prisma.chapter.findMany.mockResolvedValue(mockPublishedChapters);
    prisma.userProgress.count.mockResolvedValue(mockValidCompletedChapters);

    const mockProgress =
      (mockValidCompletedChapters / mockPublishedChapters.length) * 100;

    const progressPercentage = await getProgress(userId, courseId);

    expect(progressPercentage).toBe(mockProgress);
  });
});
