import { Handle, Position } from '@xyflow/react';
import '../styles/globals.css'; // Optional for custom styles


function OpenFileNode({ data}) {
    return (
      <div className="base-node">
      <div className="node-title">{"Open file"}</div>
      <div className="node-content">
        <div className="node-content-input">
          <label>File path</label>
          <Handle type="source" position={Position.Right} id="b" className="handle"/>
        </div>
        <div className="node-content-output">
          <label>Stream</label>
          <Handle type="target" position={Position.Left} id="a" className="handle"/>
        </div>
      </div>
    </div>
    );
  }

export default OpenFileNode;
