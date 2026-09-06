export type LegalContentNode =
    | {
          type: "groupTitle";
          id: string;
          variant?: "default";
          children: LegalContentNode[];
      }
    | {
          type: "section";
          id: string;
          variant?: "default" | "spaced";
          children: LegalContentNode[];
      }
    | {
          type: "group";
          id: string;
          variant?: "default" | "paragraph" | "ulList";
          children: LegalContentNode[];
      }
    | {
          type: "heading";
          id?: string;
          level: 1 | 2 | 3 | 4;
          text: string;
      }
    | {
          type: "paragraph";
          text: string;
      }
    | {
          type: "list";
          listType?: "ul" | "ol";
          items: string[];
      }
    | {
          type: "span";
          text: string;
          variant?: "default" | "subtitle" | "contact";
      };
