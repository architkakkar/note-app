type Note = {
  id: string;
} & NoteData;

type RawNote = {
  id: string;
} & RawNoteData;

type RawNoteData = {
  title: string;
  body: string;
  tagIds: string[];
};

type NoteData = {
  title: string;
  body: string;
  tags: Tag[];
};

type Tag = {
  id: string;
  label: string;
};

export type { Note, RawNote, RawNoteData, NoteData, Tag };
