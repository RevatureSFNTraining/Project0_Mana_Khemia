var Types=require("../constants/types");function Field(e){e=e||{},this.parser=e.parser,this.packet=e.packet,this.db=e.packet.db,this.table=e.packet.table,this.name=e.packet.name,this.type=Types[e.packet.type],this.length=e.packet.length}module.exports=Field,Field.prototype.string=function(){return this.parser.parseLengthCodedString()},Field.prototype.buffer=function(){return this.parser.parseLengthCodedBuffer()},Field.prototype.geometry=function(){return this.parser.parseGeometryValue()};