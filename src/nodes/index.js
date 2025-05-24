import { PositionLoggerNode } from "./PositionLoggerNode";
import { TextUpdaterNode } from "./TextUpdaterNode";

export const initialNodes = [
  { id: "a", type: "input", position: { x: 0, y: 0 }, data: { label: "wire" } },
  {
    id: "b",
    type: "position-logger",
    position: { x: -100, y: 100 },
    data: { label: "drag me!" },
  },
  { id: "c", position: { x: 100, y: 100 }, data: { label: "your ideas" } },
  {
    id: "d",
    type: "output",
    position: { x: 0, y: 200 },
    data: { label: "with React Flow" },
  },
  {
    id: "e",
    type: "TextUpdaterNode",
    position: { x: -150, y: 50 },
    data: { label: "drag me!" },
  },
];

export const nodeTypes = {
  "position-logger": PositionLoggerNode,
  TextUpdaterNode: TextUpdaterNode,
  // Add any of your custom nodes here!
};
