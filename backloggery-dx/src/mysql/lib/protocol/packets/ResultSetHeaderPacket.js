function ResultSetHeaderPacket(e){e=e||{},this.fieldCount=e.fieldCount}module.exports=ResultSetHeaderPacket,ResultSetHeaderPacket.prototype.parse=function(e){this.fieldCount=e.parseLengthCodedNumber()},ResultSetHeaderPacket.prototype.write=function(e){e.writeLengthCodedNumber(this.fieldCount)};