function ErrorPacket(t){t=t||{},this.fieldCount=t.fieldCount,this.errno=t.errno,this.sqlStateMarker=t.sqlStateMarker,this.sqlState=t.sqlState,this.message=t.message}module.exports=ErrorPacket,ErrorPacket.prototype.parse=function(t){this.fieldCount=t.parseUnsignedNumber(1),this.errno=t.parseUnsignedNumber(2),35===t.peak()&&(this.sqlStateMarker=t.parseString(1),this.sqlState=t.parseString(5)),this.message=t.parsePacketTerminatedString()},ErrorPacket.prototype.write=function(t){t.writeUnsignedNumber(1,255),t.writeUnsignedNumber(2,this.errno),this.sqlStateMarker&&(t.writeString(this.sqlStateMarker),t.writeString(this.sqlState)),t.writeString(this.message)};