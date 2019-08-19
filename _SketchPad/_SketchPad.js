a.show()

algys()
  .scale(() => a.fft[0])
  // .scale(0.1G)
  .out()

udgn = document.createElement('img')
udgn.src = imgLoc("UDGNlogo.png")
s0.init({src: udgn})
udgn = (size=1) =>
    src(s0)
      .mult(shape(4).scale(3.25,1))
      .scale(size,res)

udgn(() => a.fft[0]+0.2)
  .scale(() => Math.cos(0.5*Math.sin(time*0.5)))
  .scale(1.5)
  .out(o1)

src(o1)
  .modulateScale(osc(2,0.3).kaleid(4),0.7,0.7)
  .add(src(o0).scale(1.4),0.75)
  .mask(src(o1).scale(1.5),0.45)
  .add(src(o0).scale(() => a.fft[0]+1.1),0.5)
  .add(src(o3),1)
  // .mult(src(o3).scale(() => a.fft[0]+1.1),1)
  .out(o0)

render(o0)

a.show()
a.setBins(3)
a.setSmooth(0.5)

voronoi(16,0.9,0.4).color(3,1,0)
  .mask(solid(3.1,1.1,0.1).mult(gradient().saturate(0)))
  .mult(solid(1.3,0.8,2).mult(gradient().saturate(0)))
  .mask(noise(16,1.9).contrast(2).scale(7,0.1),0.1)
  .scale(() => a.fft[0]+-0.9,.9)
  .pixelate(100,60)
  .mask(noise(10,1.9)
    .contrast(2)
    .scale(7,0.15)
    .pixelate(100,60)
    ,0.1)
  .scale(-0.8,0.8)
  .out(o3)

render()

hush()
