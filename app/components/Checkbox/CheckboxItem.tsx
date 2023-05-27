import { prefecture } from '@/app/utils/types';

type Props = {
  prefecture: prefecture;
};

export const CheckboxItem = (props: Props) => {
  return (
    <div>
      <input type='checkbox' />
      <label>{props.prefecture.prefName}</label>
    </div>
  );
};
