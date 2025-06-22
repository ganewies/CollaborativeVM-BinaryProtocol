import { CollabVMRectMessage } from "./CollabVMRectMessage.js";

export interface CollabVMProtocolMessage {
    type: CollabVMProtocolMessageType;
    rect?: CollabVMRectMessage | undefined;
    opusPacket?: Buffer | Unit8Array | undefined;
}

export enum CollabVMProtocolMessageType {
    // JPEG Dirty Rectangle
    rect = 0,
    audioOpus = 1, // OPUS Audio Message Type
}
