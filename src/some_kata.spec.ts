import { expect } from "@jest/globals"

class Rover{
  private pos: Array<string | number>;

  constructor(position: Array<string | number>){
    this.pos=position;
  }

  position(){
    return this.pos;
  }

  commands(instructions: Array<String>){
    instructions.forEach((command)=>{
      if(command == 'forward'){
        const dictDirections = {
          'N': ()=>{this.pos[1] = (this.pos[1] as number) + 1;},
          'S': ()=>{this.pos[1] = (this.pos[1] as number) - 1;},
          'E': ()=>{this.pos[0] = (this.pos[0] as number) + 1;},
          'W': ()=>{this.pos[0] = (this.pos[0] as number) - 1;},
        }
        
      }else{
        this.pos[1] = (this.pos[1] as number) - 1;
      }
    })
  }
}

describe("Mars rover", () => {
  it("should return the mars rovers position", () => {
    const rover = new Rover([0,0,'N']);
    const position = rover.position();
  expect(position).toStrictEqual([0,0,'N'])
  })
  it("should receive forward commands", ()=>{
    const rover = new Rover([0,0,'N']);
    const position = rover.position();
    rover.commands(['forward']);
    expect(position).toStrictEqual([0,1,'N']);
  })
  it("should receive backward commands", ()=>{
    const rover = new Rover([0,0,'N']);
    const position = rover.position();
    rover.commands(['backward']);
    expect(position).toStrictEqual([0,-1,'N']);
  })
  it("should face to East and forward to", ()=>{
    const rover = new Rover([0,0,'E']);
    const position = rover.position();
    rover.commands(['forward']);
    expect(position).toStrictEqual([1,0,'E']);
  })
})
