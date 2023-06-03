import { Prefecture } from '@/app/utils/types';
import { CheckboxArea } from './CheckboxArea';
import { SelectPulldownArea } from './SelectPulldownArea';

export const Checkbox = async () => {
  const prefectures: Prefecture[] = await getPrefectures();
  return (
    <>
      <CheckboxArea prefectures={prefectures} />
      <SelectPulldownArea prefectures={prefectures} />
    </>
  );
};

const getPrefectures = async () => {
  const response = await fetch('http://localhost:3000/api/prefectures', {
    method: 'GET',
  })
    .then((res) => res.json())
    .then((data) => {
      return data.data;
    })
    .catch((err) => {
      return err;
    });

  return response;
};
