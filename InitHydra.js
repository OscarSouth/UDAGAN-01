xres = window.innerWidth
yres = window.innerHeight
res = yres/xres
//
hush = (o) => {
  if (o == undefined) {
    solid().out(o0)
    solid().out(o1)
    solid().out(o2)
    solid().out(o3)
    render(o0)
    }
  solid().out(o)
  }
//
clipLoc = (file) => {
  if (file == undefined) {
    return `/home/oscarsouth/Videos/blank.mp4`
    }
  return `/home/oscarsouth/Videos/${file}`
  }
//
loadClip = (source, file) => {
  vid = new P5()
  clip = vid.createVideo(clipLoc(file))
  clip.loop()
  vid.draw = () => {
    vid.clear()
    vid.image(clip, 0, 0, vid.width, vid.height)
    }
  vid.hide()
  source.init({src: vid.canvas})
  }
//
imgLoc = (file) => {
  if (file == undefined) {
    return `/home/oscarsouth/Pictures/blank.jpg.`
    }
  return `/home/oscarsouth/Pictures/${file}`
  }
//
centre = () =>
  shape(4)
    .scale(1,0.12)
//
left = () =>
  shape(4)
    .scale(1,0.12, 0.55)
    .rotate(0.8)
    .scrollX(-0.055)
    .scrollY(0.055)
//
right = () =>
  shape(4)
    .scale(1,0.12, 0.55)
    .rotate(-0.8)
    .scrollX(0.055)
    .scrollY(0.055)
//
algys = (size=1) =>
  centre()
    .add(left(),1)
    .add(right(),1)
    .scale(size,res)
    .mult(shape(4).scale(size,res))
