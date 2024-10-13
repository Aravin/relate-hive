'use client';

import React, { useEffect, useRef } from 'react';
import go from 'gojs';

export default function Dashboard() {
  const diagramRef = useRef<HTMLDivElement>(null);
  let diagram: go.Diagram | null = null;

  useEffect(() => {
    if (diagramRef.current) {
      const $ = go.GraphObject.make;

      if (diagram) {
        diagram.div = null;
        diagram.reset();
      }

      diagram = $(go.Diagram, diagramRef.current, {
        'undoManager.isEnabled': true,
        layout: $(go.TreeLayout, { angle: 90, layerSpacing: 35 }),
      });

      diagram.nodeTemplate =
        $(go.Node, "Horizontal",
          { background: "#44CCFF" },
          $(go.Panel, "Table",
            { defaultAlignment: go.Spot.Left },
            $(go.RowColumnDefinition, { column: 0, width: 60 }),
            $(go.RowColumnDefinition, { column: 1, stretch: go.GraphObject.Horizontal }),

            // Placeholder for user's profile picture
            $(go.Picture,
              { row: 0, column: 0, margin: 5, width: 50, height: 50, background: "red" },
              new go.Binding("source")),

            // Full Name
            $(go.TextBlock, "Default Text",
              { row: 0, column: 1, margin: 12, stroke: "white", font: "bold 16px sans-serif" },
              new go.Binding("text", "fullName")),

            // Gender (assuming you have a "gender" field in your data)
            $(go.TextBlock,
              { row: 1, column: 1, margin: 5, stroke: "white", font: "12px sans-serif" },
              new go.Binding("text", "gender")),

            // Relation Name
            $(go.TextBlock,
              { row: 2, column: 1, margin: 5, stroke: "white", font: "italic 12px sans-serif" },
              new go.Binding("text", "relationName"))
          )
        );

      diagram.linkTemplate =
        $(go.Link,
          { routing: go.Routing.Orthogonal, corner: 5 },
          $(go.Shape, { strokeWidth: 3, stroke: "#555" }));

      const nodeDataArray = [
        { key: 1, fullName: "Your Name", gender: "Male", relationName: "Me", parent: 1,  source: "https://via.placeholder.com/50" },
        { key: 2, fullName: "Grandfather", gender: "Male", relationName: "Grandfather", source: "https://via.placeholder.com/50" },
        { key: 3, fullName: "Grandmother", gender: "Female", relationName: "Grandmother", source: "https://via.placeholder.com/50" },
        { key: 4, fullName: "Father", parent: 1, gender: "Male", relationName: "Father", source: "https://via.placeholder.com/50" },
        { key: 5, fullName: "Mother", parent: 2, gender: "Female", relationName: "Mother", source: "https://via.placeholder.com/50" },
        { key: 6, fullName: "Brother", parent: 4, gender: "Male", relationName: "Brother", source: "https://via.placeholder.com/50" },
        { key: 7, fullName: "Sister", parent: 4, gender: "Female", relationName: "Sister", source: "https://via.placeholder.com/50" },
        { key: 8, fullName: "Cousin", parent: 3, gender: "Male", relationName: "Cousin", source: "https://via.placeholder.com/50" },
      ];
      diagram.model = new go.TreeModel(nodeDataArray);
    }


    return () => {
      if (diagram) {
        diagram.div = null;
        diagram.reset();
      }
    };
  }, []);

  return (
    <main className="container mx-auto p-4 md:p-8 lg:p-12 min-h-screen">
      <div className="bg-gray-50 rounded-lg shadow-md p-6 md:p-10">
        <h1 className="text-3xl font-bold text-gray-700 mb-4">Family Tree</h1>
        {/* Remove background color */}
        <div ref={diagramRef} style={{ width: '100%', height: '600px' }}></div>
      </div>
    </main>
  );
}
