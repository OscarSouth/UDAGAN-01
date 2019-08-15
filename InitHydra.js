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

clipLoc = (file) => {
  if (file == undefined) {
    return `/home/oscarsouth/Videos/blank.mp4`
    }
  return `/home/oscarsouth/Videos/${file}`
  }

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

imgLoc = (file) => {
  if (file == undefined) {
    return `/home/oscarsouth/Pictures/blank.jpg.`
    }
  return `/home/oscarsouth/Pictures/${file}`
  }
