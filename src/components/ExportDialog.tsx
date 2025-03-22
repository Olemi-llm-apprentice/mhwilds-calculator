import { CopyIcon, XIcon } from "lucide-react";
import { useMemo, useRef, useState, useEffect } from "react";
import { CombinedBuffs } from "@/data";
import { useModel } from "@/store";
import text, { getText } from "@/text";
import { Button } from "./Button";
import { Card } from "./Card";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./Dialog";
import { Notice } from "./Notice";

export const ExportDialog = () => {
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
  } = useModel();

  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [clientReady, setClientReady] = useState(false);

  // クライアントサイドでのみ実行されるようにする
  useEffect(() => {
    setClientReady(true);
  }, []);

  const data = useMemo(
    () =>
      JSON.stringify(
        {
          weapon,
          attack,
          affinity,
          element,
          sharpness,
          rawHzv,
          eleHzv,
          isWound,
          buffs: Object.entries(buffs).reduce(
            (a, [k, v]) => {
              const buff = CombinedBuffs[k];
              if (!buff) return a;
              const i = buff.levels.findIndex((l) => l.name === v.name);
              if (i === -1) return a;
              return { ...a, [k]: i + 1 };
            },
            {} as Record<string, number>,
          ),
        },
        null,
        2,
      ),
    [
      weapon,
      attack,
      affinity,
      element,
      sharpness,
      rawHzv,
      eleHzv,
      isWound,
      buffs,
    ],
  );

  const interval = useRef<NodeJS.Timeout>(undefined);

  const copy = () => {
    navigator.clipboard.writeText(data);
    setCopied(true);
    interval.current = setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  const exportText = clientReady ? getText("EXPORT") : "";
  const copyText = clientReady ? getText("COPY") : "";
  const copiedText = clientReady ? getText("COPIED") : "";

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm">
          <CopyIcon className="h-4 w-4" />
          {exportText}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <Card>
          <DialogTitle asChild>
            <div className="flex items-start justify-between gap-2">
              <h1>{exportText}</h1>
              <Button variant="text" size="icon" onClick={() => setOpen(false)}>
                <XIcon className="h-4 w-4" />
              </Button>
            </div>
          </DialogTitle>
          <Notice>{text.EXPORT_NOTICE}</Notice>
          <textarea
            className="bg-content-alt rounded p-2 font-mono text-xs"
            value={data}
            rows={20}
            readOnly
          />
          <div className="flex justify-end gap-2">
            {copied && <Notice variant="success">{copiedText}</Notice>}
            <Button onClick={copy}>
              <CopyIcon className="h-4 w-4" /> {copyText}
            </Button>
          </div>
        </Card>
      </DialogContent>
    </Dialog>
  );
};
