import type { LegalContentNode } from "@/types/LegalContentNode";

type LegalContentRendererProps = {
    content: LegalContentNode[];
};

const styles = {
    
    groupTitle: {
        default: "",
    },

    section: {
        default: "",
        spaced: "flex flex-col gap-4",
    },

    group: {
        default: "",
        paragraph: "paragraph",
        ulList: "ul-list",
    },

    heading: {
        1: "text-orange500 text-3xl font-bold",
        2: "text-2xl font-semibold mb-3",
        3: "text-xl font-semibold mb-2",
        4: "font-semibold text-lg",
    },

    paragraph: "mb-2",
    list: "list-disc pl-6 space-y-1",
    span: {
        default: "block",
        subtitle: "text-dark500",
        contact: "block font-medium",
    },
} as const;

function renderNode(node: LegalContentNode) {
    switch (node.type) {
        case "groupTitle":
            return (
                <header
                    id={node.id}
                    className={styles.groupTitle[node.variant ?? "default"]}
                >
                    {node.children.map((child, index) => (
                        <RenderNode key={`${node.id}-${index}`} node={child} />
                    ))}
                </header>
            );

        case "section":
            return (
                <section
                    id={node.id}
                    className={styles.section[node.variant ?? "default"]}
                >
                    {node.children.map((child, index) => (
                        <RenderNode key={`${node.id}-${index}`} node={child} />
                    ))}
                </section>
            );

        case "group":
            return (
                <div
                    id={node.id}
                    className={styles.group[node.variant ?? "default"]}
                >
                    {node.children.map((child, index) => (
                        <RenderNode key={`${node.id}-${index}`} node={child} />
                    ))}
                </div>
            );

        case "heading": {
            const className = styles.heading[node.level];

            if (node.level === 2) {
                return <h2 className={className}>{node.text}</h2>;
            }

            if (node.level === 3) {
                return <h3 className={className}>{node.text}</h3>;
            }

            return <h4 className={className}>{node.text}</h4>;
        }

        case "paragraph":
            return <p className={styles.paragraph}>{node.text}</p>;

        case "list": {
            const ListTag = node.listType ?? "ul";

            return (
                <ListTag className={styles.list}>
                    {node.items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ListTag>
            );
        }

        case "span":
            return (
                <span className={styles.span[node.variant ?? "default"]}>
                    {node.text}
                </span>
            );

        default:
            return null;
    }
}

function RenderNode({ node }: { node: LegalContentNode }) {
    return <>{renderNode(node)}</>;
}

export function LegalContentRenderer({ content }: LegalContentRendererProps) {
    return (
        <div className="flex flex-col gap-10 text-justify">
            {content.map((node, index) => (
                <RenderNode key={index} node={node} />
            ))}
        </div>
    );
}
