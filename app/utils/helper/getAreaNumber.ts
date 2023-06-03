export enum AreaCode {
  Hokkaido = 'Hokkaido',
  Tohoku = 'Tohoku',
  Kanto = 'Kanto',
  Chubu = 'Chubu',
  Kinki = 'Kinki',
  Chugoku = 'Chugoku',
  Shikoku = 'Shikoku',
  Kyushu = 'Kyushu',
}

export const getAreaCode = (prefCode: number): AreaCode | null => {
  if (prefCode === 1) {
    return AreaCode.Hokkaido;
  } else if (prefCode >= 2 && prefCode <= 7) {
    return AreaCode.Tohoku;
  } else if (prefCode >= 8 && prefCode <= 14) {
    return AreaCode.Kanto;
  } else if (prefCode >= 15 && prefCode <= 23) {
    return AreaCode.Chubu;
  } else if (prefCode >= 24 && prefCode <= 30) {
    return AreaCode.Kinki;
  } else if (prefCode >= 31 && prefCode <= 35) {
    return AreaCode.Chugoku;
  } else if (prefCode >= 36 && prefCode <= 39) {
    return AreaCode.Shikoku;
  } else if (prefCode >= 40 && prefCode <= 47) {
    return AreaCode.Kyushu;
  } else {
    return null;
  }
};
