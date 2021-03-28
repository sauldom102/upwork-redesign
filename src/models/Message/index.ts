export default interface Message {
  id: string;
  at: Date;
  previewAt: string;
  seen: boolean;
  text?: string;
  fromMe: boolean;
  photo?: string;
}
