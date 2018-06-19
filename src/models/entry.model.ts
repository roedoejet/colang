export class Entry {
  audio?: string[];               // Required for audio
  sentence_audio?: any[];         // Required for sentence audio
  compare_form: string[];         // Required
  definition: string[];           // Required
  display_form: string[];         // Required
  firstWordIndex?: number;        // Auto-generated by Browse component
  id: string;                     // Required for bookmarks
  img?: string[];                 // Required for images
  optional?: any[];               // Required for optional content
  sorting_form: number[];         // Required
  word: string[];                 // Required
}
