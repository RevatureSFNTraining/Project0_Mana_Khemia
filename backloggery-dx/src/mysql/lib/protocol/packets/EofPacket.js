function EofPacket(t){t=t||{},this.fieldCount=void 0,this.warningCount=t.warningCount,this.serverStatus=t.serverStatus,this.protocol41=t.protocol41}module.exports=EofPacket,EofPacket.prototype.parse=function(t){this.fieldCount=t.parseUnsignedNumber(1),this.protocol41&&(this.warningCount=t.parseUnsignedNumber(2),this.serverStatus=t.parseUnsignedNumber(2))},EofPacket.prototype.write=function(t){t.writeUnsignedNumber(1,254),this.protocol41&&(t.writeUnsignedNumber(2,this.warningCount),t.writeUnsignedNumber(2,this.serverStatus))};