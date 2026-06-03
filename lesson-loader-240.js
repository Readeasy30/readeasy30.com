// ReadEasy30 240-day staged lesson loader
// Loads staged Level B-H lesson data into one safe lookup object.
// This file does not replace the current live app engine.
(function () {
  function safeArray(value) {
    return Array.isArray(value) ? value : [];
  }

  const levelALessons = [];
  const levelBLessons = safeArray(window.READEASY_LEVEL_B_LESSONS);
  const levelCLessons = safeArray(window.READEASY_LEVEL_C_LESSONS);
  const levelDLessons = safeArray(window.READEASY_LEVEL_D_LESSONS);
  const levelELessons = safeArray(window.READEASY_LEVEL_E_LESSONS);
  const levelFLessons = safeArray(window.READEASY_LEVEL_F_LESSONS);
  const levelGLessons = safeArray(window.READEASY_LEVEL_G_LESSONS);
  const levelHLessons = safeArray(window.READEASY_LEVEL_H_LESSONS);

  const nextPathLessons = [
    ...levelBLessons,
    ...levelCLessons,
    ...levelDLessons,
    ...levelELessons,
    ...levelFLessons,
    ...levelGLessons,
    ...levelHLessons
  ].sort((a, b) => a.day - b.day);

  const lessonsByDay = nextPathLessons.reduce((map, lesson) => {
    map[String(lesson.day)] = lesson;
    return map;
  }, {});

  const lessonsByLevel = nextPathLessons.reduce((map, lesson) => {
    if (!map[lesson.level]) map[lesson.level] = [];
    map[lesson.level].push(lesson);
    return map;
  }, {});

  window.READEASY_NEXT_PATH_LESSONS = nextPathLessons;
  window.READEASY_LESSONS_BY_DAY = lessonsByDay;
  window.READEASY_LESSONS_BY_LEVEL = lessonsByLevel;
  window.READEASY_240_LESSON_STATUS = {
    liveLevelA: levelALessons.length,
    stagedNextPath: nextPathLessons.length,
    expectedStagedNextPath: 210,
    firstStagedDay: nextPathLessons.length ? nextPathLessons[0].day : null,
    lastStagedDay: nextPathLessons.length ? nextPathLessons[nextPathLessons.length - 1].day : null,
    levelsLoaded: Object.keys(lessonsByLevel)
  };

  window.getReadEasyStagedLesson = function getReadEasyStagedLesson(day) {
    return lessonsByDay[String(day)] || null;
  };
})();
