const BASE_PATH = '/';

export const PageRoutes = {
  ROOT: `${BASE_PATH}` as const,
  LOGIN: `${BASE_PATH}login` as const,
  ZONEMANAGE:  `${BASE_PATH}ZoneManagement` as const,
  EXAMZOOMMANAGE: `${BASE_PATH}examRoomManagement` as const,
  EXAMINEEMANAGE: `${BASE_PATH}examineeManagement` as const,
  INFOREVIEW: `${BASE_PATH}infoReview` as const,
  SYSTEMUSER: `${BASE_PATH}systemUser` as const,
  EXAMMANGE: `${BASE_PATH}examManagement` as const,
  ACHIEVEMANAGE: `${BASE_PATH}achievementManagement` as const,
  SETUP: `${BASE_PATH}setUp` as const,
};
