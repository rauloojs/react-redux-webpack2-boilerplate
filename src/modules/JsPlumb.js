import jsPlumb from 'jsplumb';

// const endpoint = ["Dot", { radius: 6 }];
const endpoint = ['Rectangle', { width: 10, height: 10 }];
const connector = [ "Flowchart", { cornerRadius: 4, midpoint: 0.8 } ];
const connectorStyle = { strokeWidth: 2, stroke: '#444' };
const connectorOverlays = [
    ['Arrow', { location: 1, width: 12, length: 12 }]
];

const endpointBase = {
  endpoint,
  connector,
  connectorStyle
}

export const newTargetEndpoint = (uuid) => {
  return {
    ...endpointBase,
    id: uuid + '-top',
    isSource: false,
    isTarget: true,
    anchor: [ "TopCenter" ],
    maxConnections: 10
  }
}
export const newSourceEndpoint = (uuid, anchor=['Continuous', { faces: ['right', 'left'] }], key='right') => {
  return {
    ...endpointBase,
    id: uuid + '-'  + key,
    isSource: true,
    isTarget: false,
    anchor: anchor,
    maxConnections: 1,
    connectorOverlays
  }
}

const JsPlumb = jsPlumb.jsPlumb.getInstance();

export default JsPlumb;
