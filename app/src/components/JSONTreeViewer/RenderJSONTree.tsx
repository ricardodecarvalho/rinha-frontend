import { JSONValue } from "../../types";
import {
  ArrayIndex,
  Brackets,
  Key,
  ListItem,
  UnorderedList
} from "./styles";

const RenderJSONTree = (data: JSONValue) => {
  if (!data) return null

  const isArray = (data: JSONValue) => Array.isArray(data)

  const isNumeric = (str: string | number) => {
    if (typeof str === "number") return true
    if (typeof str !== "string") return false
    return !isNaN(Number(str)) && !isNaN(parseFloat(str))
  }

  return (
    <>
      <UnorderedList>
        {Object.keys(data)
          .map((name, index) => {
            const key = name as keyof JSONValue;
            return (
              <ListItem key={index}>
                {isNumeric(key) ? (
                  <ArrayIndex>{key}:</ArrayIndex>
                ) : (
                  <Key>{key}:</Key>
                )}{" "}
                {isArray(data[key]) && <Brackets>[</Brackets>}
                {typeof data[key] === "object" && data[key] !== null ? (
                  RenderJSONTree(data[key])
                ) : (
                  JSON.stringify(data[key])
                )}
                {isArray(data[key]) && <Brackets>]</Brackets>}
              </ListItem>
            );
          })}
      </UnorderedList>
    </>
  );
}

export default RenderJSONTree
