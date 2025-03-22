import type { Buff, BuffGroup } from "@/types";
import { Select, type SelectProps } from ".";
import { translateSkillName, translateSkillLevel } from "@/utils/translation";

type Props = Omit<SelectProps<Buff | undefined>, "options"> & {
  skill: BuffGroup;
};

export function SkillSelect({
  skill,
  onChangeValue,
  label,
  placeholder,
  value,
}: Props) {
  const { name, levels } = skill;
  const options = [undefined, ...levels];

  // スキル名を翻訳
  const translatedName = translateSkillName(name);
  // placeholder または 翻訳されたスキル名を使用
  const displayPlaceholder = placeholder !== undefined ? placeholder : translatedName;

  return (
    <Select
      options={options}
      label={label}
      value={value}
      labelFn={(opt) => opt ? translateSkillLevel(opt.name) : ""}
      onChangeValue={onChangeValue}
      placeholder={displayPlaceholder}
    />
  );
}
