import { JsonValue } from "./types"
import {
  ArrayIndex,
  SquareBrackets,
  Key,
  ListItem,
  UnorderedList
 } from "./styles";
import { isArray, isNumeric } from "../../utils";

type JsonNodeProps = {
  node: JsonValue;
  depth?: number;
}

export const JsonNode = ({ node, depth = 0 }: JsonNodeProps) => {
  if (!node) return null
  
  return (
    <>
      <UnorderedList>
        {Object.keys(node)
          .map((name, index) => {
            const key = name as keyof JsonValue;
            return (
              <ListItem key={index}>
                {isNumeric(key) ? (
                  <ArrayIndex>{key}:</ArrayIndex>
                ) : (
                  <Key>{key}:</Key>
                )}{" "}
                {isArray(node[key]) && <SquareBrackets $isopen />}
                {typeof node[key] === "object" && node[key] !== null ? (
                  <JsonNode node={node[key]} depth={depth + 1} />
                ) : (
                  JSON.stringify(node[key])
                )}
                {isArray(node[key]) && <SquareBrackets />}
              </ListItem>
            );
          })}
      </UnorderedList>
    </>
  );
}
