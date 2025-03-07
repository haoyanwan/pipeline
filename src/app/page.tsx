"use client";

import Image from "next/image";
import styles from "../../styles/page.module.css";
import { BackgroundVariant } from '@xyflow/react';
import { 
  useCallback, 
  useMemo 
} from 'react';
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  useEdges,
  addEdge,
  Connection,
  Edge,
  MiniMap,
  Controls,
  Background,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import OpenFileNode from '../../props/OpenFileNode'

const initialNodes = [
  { id: '1', type: 'openFile', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];


export default function Home() {
  const nodeTypes = useMemo(() => ({ openFile: OpenFileNode }), []);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes); 
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  )

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow 
        nodes={nodes} 
        edges={edges} 
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView={true}
        elevateEdgesOnSelect={true}
        nodeTypes={nodeTypes}
      >
        <MiniMap />
        <Controls />
        <Background variant={BackgroundVariant.Lines} gap={12} size={1}/>
      </ReactFlow>
    </div>
  );
}
