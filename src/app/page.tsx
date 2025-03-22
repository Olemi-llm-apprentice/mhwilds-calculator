"use client";

import { produce } from "immer";
import { ChevronDown, ChevronUp, TimerResetIcon } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import {
  Button,
  Card,
  Checkbox,
  ExportDialog,
  ImportDialog,
  Notice,
  NumberDisplay,
  NumberInput,
  Select,
  SkillSelect,
  SnapshotMovesTable,
} from "@/components";
import { MovesTable } from "@/components/MovesTable";
import {
  Buffs,
  FieldBuffs,
  HuntingHornBuffs,
  Sharpnesses,
  WeaponBuffs,
  Weapons,
} from "@/data";
import { ArmorSkills, SetSkills, WeaponSkills } from "@/data/skills";
import { round } from "@/model";
import { useCalcs, useGetters, useModel } from "@/store";
import { Attack, Buff, SnapshotAttack, isRanged } from "@/types";
import { getText } from "@/text";
import { translateComboMode, translateComboModeDescription } from "@/utils/translation";

const ComboModeOptions = ["Dynamic", "Snapshot"] as const;
type ComboModeOption = (typeof ComboModeOptions)[number];

export default function Home() {
  const {
    weapon,
    attack,
    affinity,
    element,
    sharpness,
    buffs,
    rawHzv,
    eleHzv,
    isWound,
    setAttack,
    setAffinity,
    setWeapon,
    setElement,
    setSharpness,
    setBuff,
    setRawHzv,
    setEleHzv,
    setIsWound,
  } = useModel();
  const { uiAttack, uiElement, uiAffinity } = useGetters();
  const { calcEffectiveRaw, calcEffectiveEle, calcAverage, calcHit, calcCrit } =
    useCalcs();

  const [miscAttack, setMiscAttack] = useState(0);
  const [miscAttackMul, setMiscAttackMul] = useState(0);
  const [miscElement, setMiscElement] = useState(0);
  const [miscElementMul, setMiscElementMul] = useState(0);
  const [miscAffinity, setMiscAffinity] = useState(0);
  const [hideSkills, setHideSkills] = useState(false);
  const [hideBuffs, setHideBuffs] = useState(false);
  const [dynamicCombo, setDynamicCombo] = useState<Attack[]>([]);
  const [snapshotCombo, setSnapshotCombo] = useState<SnapshotAttack[]>([]);
  const [comboMode, setComboMode] = useState<ComboModeOption>("Dynamic");

  const notice = useMemo(() => {
    if (weapon === "Switch Axe") {
      return "Element Phial Explosion damage is scuffed right now. Still figuring things out.";
    }
  }, [weapon]);

  // TODO: refactor
  const miscBuff: Buff = useMemo(() => {
    return {
      name: "Miscellaneous",
      attack: miscAttack,
      element: miscElement,
      elementMul: 1 + miscElementMul / 100,
      attackMul: 1 + miscAttackMul / 100,
      affinity: miscAffinity,
    };
  }, [miscAttack, miscAttackMul, miscAffinity, miscElement, miscElementMul]);

  const efr = useMemo(() => calcEffectiveRaw(), [calcEffectiveRaw]);
  const efe = useMemo(() => calcEffectiveEle(), [calcEffectiveEle]);

  const comboModeDescription = useMemo(() => {
    if (comboMode === "Snapshot") {
      return translateComboModeDescription("Captures the damage of an attack when it is added.");
    }
    return translateComboModeDescription("Re-calculates damage of all attacks when inputs change.");
  }, [comboMode]);

  const totalDamage = useMemo(() => {
    if (comboMode === "Snapshot") {
      return snapshotCombo.reduce((acc, a) => acc + a.avg, 0);
    }
    return dynamicCombo.reduce((acc, a) => acc + calcAverage(a), 0);
  }, [comboMode, dynamicCombo, snapshotCombo, calcAverage]);

  const totalHits = useMemo(() => {
    if (comboMode === "Snapshot") return snapshotCombo.length;
    return dynamicCombo.length;
  }, [comboMode, dynamicCombo, snapshotCombo]);

  useEffect(() => {
    setBuff("Miscellaneous", miscBuff);
  }, [miscBuff, setBuff]);

  const addAttack = (a: Attack) => {
    if (comboMode === "Snapshot") {
      setSnapshotCombo(
        produce(
          (d) =>
            void d.push({
              name: a.name ?? "",
              hit: calcHit(a),
              crit: calcCrit(a),
              avg: calcAverage(a),
              cantCrit: a.cantCrit,
            }),
        ),
      );
    } else {
      setDynamicCombo(produce((d) => void d.push(a)));
    }
  };

  const removeAttack = (i: number) => {
    if (comboMode === "Snapshot") {
      setSnapshotCombo(produce((d) => void d.splice(i, 1)));
    } else {
      setDynamicCombo(produce((d) => void d.splice(i, 1)));
    }
  };

  useEffect(() => {
    setDynamicCombo([]);
    setSnapshotCombo([]);
  }, [comboMode, weapon]);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-end gap-2">
        <ImportDialog />
        <ExportDialog />
      </div>
      <div className="flex flex-col gap-2 md:flex-row">
        <div className="flex flex-2 flex-col gap-2">
          <Card>
            <div>
              <h1>{getText("WEAPON")}</h1>
              <h3>
                {getText("DISPLAY_INSTRUCTIONS")}
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
              <div className="col-span-2 lg:col-span-4">
                <Select
                  label={getText("WEAPON")}
                  value={weapon}
                  options={[...Weapons]}
                  onChangeValue={setWeapon}
                />
              </div>
              <NumberInput
                label={getText("ATTACK")}
                value={attack}
                onChangeValue={setAttack}
                min={0}
                step={5}
              />
              <NumberInput
                label={getText("ELEMENT")}
                value={element}
                onChangeValue={setElement}
                min={0}
                step={10}
                disabled={["Light Bowgun", "Heavy Bowgun"].includes(weapon)}
              />
              <NumberInput
                label={getText("AFFINITY")}
                value={affinity}
                onChangeValue={setAffinity}
                step={5}
                min={-100}
                max={100}
              />
              <Select
                label={getText("SHARPNESS")}
                value={sharpness}
                disabled={isRanged(weapon)}
                onChangeValue={setSharpness}
                options={[...Sharpnesses]}
                // description={`Raw: ${sharpnessRaw[sharpness]} Element: ${sharpnessEle[sharpness]}`}
              />
              {Object.entries(WeaponBuffs).map(([k, s]) => {
                if (!s.weapons?.includes(weapon)) return undefined;
                return (
                  <SkillSelect
                    key={k}
                    skill={s}
                    value={buffs[k]}
                    label={s.name}
                    placeholder=""
                    onChangeValue={(buff) => setBuff(k, buff)}
                  />
                );
              })}
            </div>
          </Card>
          <Card>
            <div>
              <div className="flex justify-between">
                <div>
                  <h1>{getText("SKILLS")}</h1>
                </div>
                <Button
                  variant="text"
                  size="icon"
                  onClick={() => setHideSkills((c) => !c)}
                >
                  {hideSkills ? <ChevronUp /> : <ChevronDown />}
                </Button>
              </div>
              {!hideSkills && (
                <h3>
                  {
                    "Tick 'Overcame Frenzy' to enable related skills. Weakness Exploit activates on HZV ≥ 45 and Wound. Convert Element only buffs Dragon."
                  }
                </h3>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-xs">{getText("WEAPON_SKILL")}</p>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {Object.entries(WeaponSkills).map(([k, s]) => {
                  if (hideSkills && !buffs[k]) return undefined;
                  if (s.weapons && !s.weapons.includes(weapon))
                    return undefined;
                  return (
                    <SkillSelect
                      key={k}
                      skill={s}
                      value={buffs[k]}
                      onChangeValue={(buff) => setBuff(k, buff)}
                    />
                  );
                })}
              </div>
              <p className="text-xs">{getText("ARMOR_SKILL")}</p>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {Object.entries(ArmorSkills).map(([k, s]) => {
                  if (hideSkills && !buffs[k]) return undefined;
                  if (s.weapons && !s.weapons.includes(weapon))
                    return undefined;
                  return (
                    <SkillSelect
                      key={k}
                      skill={s}
                      value={buffs[k]}
                      onChangeValue={(buff) => setBuff(k, buff)}
                    />
                  );
                })}
              </div>
              <p className="text-xs">{getText("SET_SKILL")}</p>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {Object.entries(SetSkills).map(([k, s]) => {
                  if (hideSkills && !buffs[k]) return undefined;
                  return (
                    <SkillSelect
                      key={k}
                      skill={s}
                      value={buffs[k]}
                      onChangeValue={(buff) => setBuff(k, buff)}
                    />
                  );
                })}
              </div>
            </div>
          </Card>
          <Card>
            <div>
              <div className="flex justify-between">
                <h1>{getText("BUFFS")}</h1>
                <Button
                  variant="text"
                  size="icon"
                  onClick={() => setHideBuffs((c) => !c)}
                >
                  {hideBuffs ? <ChevronUp /> : <ChevronDown />}
                </Button>
              </div>
              {!hideBuffs && (
                <h3>{getText("CALCULATE_UNSUPPORTED_BUFFS")}</h3>
              )}
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-0">
              {Object.entries(Buffs).map(([k, b]) => {
                if (hideBuffs && !buffs[k]) return undefined;
                return (
                  <Checkbox
                    key={k}
                    label={b.name}
                    value={buffs[k] === b.levels[0]}
                    onChangeValue={(checked) =>
                      setBuff(k, checked ? b.levels[0] : undefined)
                    }
                  />
                );
              })}
            </div>
            <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
              {Object.entries(FieldBuffs).map(([k, s]) => {
                if (hideBuffs && !buffs[k]) return undefined;
                return (
                  <SkillSelect
                    key={k}
                    value={buffs[k]}
                    skill={s}
                    label={s.name}
                    placeholder=""
                    onChangeValue={(buff) => setBuff(k, buff)}
                  />
                );
              })}
              {(!hideBuffs || miscAttack !== 0) && (
                <NumberInput
                  label={getText("MISC_FLAT_ATTACK")}
                  value={miscAttack}
                  onChangeValue={setMiscAttack}
                />
              )}
              {(!hideBuffs || miscAttackMul !== 0) && (
                <NumberInput
                  label={getText("MISC_PERCENT_ATTACK")}
                  value={miscAttackMul}
                  onChangeValue={setMiscAttackMul}
                />
              )}
              {(!hideBuffs || miscElement !== 0) && (
                <NumberInput
                  label={getText("MISC_FLAT_ELEMENT")}
                  value={miscElement}
                  onChangeValue={setMiscElement}
                />
              )}
              {(!hideBuffs || miscElementMul !== 0) && (
                <NumberInput
                  label={getText("MISC_PERCENT_ELEMENT")}
                  value={miscElementMul}
                  onChangeValue={setMiscElementMul}
                />
              )}
              {(!hideBuffs || miscAffinity !== 0) && (
                <NumberInput
                  label={getText("MISC_AFFINITY")}
                  value={miscAffinity}
                  onChangeValue={setMiscAffinity}
                />
              )}
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-xs">{getText("HUNTING_HORN")}</h2>
              <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
                {Object.entries(HuntingHornBuffs).map(([k, b]) => {
                  if (hideBuffs && !buffs[k]) return undefined;
                  return (
                    <SkillSelect
                      key={k}
                      value={buffs[k]}
                      skill={b}
                      placeholder={b.name}
                      onChangeValue={(buff) => setBuff(k, buff)}
                    />
                  );
                })}
              </div>
            </div>
          </Card>
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <Card>
            <div>
              <h1>{getText("STATS")}</h1>
            </div>
            <div>
              <NumberDisplay label={getText("ATTACK")} value={uiAttack} />
              <NumberDisplay label={getText("ELEMENT")} value={uiElement} />
              <NumberDisplay label={getText("AFFINITY")} value={uiAffinity} suffix="%" />
              <NumberDisplay label={getText("EFFECTIVE_ATTACK")} value={efr} />
              <NumberDisplay label={getText("EFFECTIVE_ELEMENT")} value={efe} />
            </div>
          </Card>
          <Card>
            <h1>{getText("DAMAGE")}</h1>
            <div className="flex place-items-center">
              <Checkbox
                label={getText("WOUND")}
                value={isWound}
                onChangeValue={setIsWound}
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <NumberInput
                label={getText("HITZONE_RAW")}
                value={rawHzv}
                onChangeValue={setRawHzv}
              />
              <NumberInput
                label={getText("HITZONE_ELE")}
                value={eleHzv}
                onChangeValue={setEleHzv}
              />
            </div>
            {notice && <Notice>{notice}</Notice>}
            <MovesTable onClick={addAttack} />
          </Card>
        </div>
        <div className="flex flex-1 flex-col gap-2">
          <Card>
            <div>
              <h1>{getText("COMBO")}</h1>
              <h3>{getText("COMBO_INSTRUCTIONS")}</h3>
            </div>
            <Select
              label={getText("MODE")}
              value={comboMode}
              options={[...ComboModeOptions]}
              onChangeValue={setComboMode}
              description={comboModeDescription}
              displayFn={(mode) => translateComboMode(mode)}
            />
            <div>
              <NumberDisplay
                label={getText("TOTAL_AVERAGE")}
                value={round(totalDamage, 2)}
              />
              <NumberDisplay label={getText("TOTAL_HITS")} value={totalHits} />
            </div>
            <div className="flex justify-end">
              <Button
                variant="secondary"
                size="sm"
                className="text-secondary"
                onClick={() => {
                  if (comboMode === "Snapshot") setSnapshotCombo([]);
                  else setDynamicCombo([]);
                }}
              >
                <TimerResetIcon className="h-4 w-4" />
                {getText("RESET")}
              </Button>
            </div>
            {comboMode === "Dynamic" ? (
              <MovesTable
                custom={dynamicCombo}
                onClick={(_, i) => removeAttack(i)}
                hideHits
              />
            ) : (
              <SnapshotMovesTable
                moves={snapshotCombo}
                onClick={(_, i) => removeAttack(i)}
              />
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}
