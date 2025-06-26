import { CollabVMRectMessage } from "./CollabVMRectMessage.js";

export interface CollabVMProtocolMessage {
    type: CollabVMProtocolMessageType;
    rect?: CollabVMRectMessage | undefined;
    opusPacket?: Buffer | Uint8Array | undefined;
}

export enum CollabVMProtocolMessageType {
    // h264 Beautiful Rectangle
    frame = 0,
    audioOpus = 1, // OPUS Audio Message Type
}
