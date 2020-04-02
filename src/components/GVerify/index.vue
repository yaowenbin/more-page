<template>
  <div
    id="canvas"
    class="flex align-center"
  />
</template>

<script>
export default {
  mounted () {
    // 保存指针
    const _this = this

    class Verify {
      constructor ({
        el,
        width = '80',
        height = '40',
        len = '6',
        lines = '5',
        dots = '40'
      }) {
        // 解构options参数 :canvas 元素， 绘制区域宽高， 验证字符个数 ,干扰线数量，干扰点数量
        this.el = document.querySelector(el)
        this.width = width
        this.height = height
        this.len = len
        this.lines = lines
        this.dots = dots

        this.code = ''
        this.init()
      }

      init () {
        this.draw()

        // 点击
        this.el.onclick = e => {
          e.preventDefault()
          this.draw()
        }
      }

      // 绘制canvas
      draw () {
        const { el, width, height, len, lines, dots } = this

        const container = el
        // 创建canvas画布
        const canvas = document.createElement('canvas')
        // 指定画布大小
        canvas.width = width
        canvas.height = height
        // 悬浮手势
        canvas.style.cursor = 'pointer'
        // 绘制边框阴影
        canvas.style.boxShadow = '0 0 10px 2px rgba(0,0,0,.1)'
        // 绘制canvas插入到el元素中(先清空)
        container.innerHTML = ''
        container.appendChild(canvas)

        // 开始绘制
        const ctx = canvas.getContext('2d')

        // 填充随机背景色
        ctx.fillStyle = this.makeColor(150, 240)

        // 绘制区域宽高
        ctx.fillRect(0, 0, width, height)

        // 填充字符
        const chars = this.makeCode()

        // 生成随机内容
        for (let i = 0; i < len; i++) {
          ctx.save()
          // 随机生成字体大小
          ctx.font = chars[i].fontSize + 'px Simhei'
          // 填充背景色
          ctx.fillStyle = this.makeColor(80, 120)
          // 偏移量
          ctx.translate((width / len) * i + 15, 16) // x , y
          // 旋转度
          ctx.rotate((chars[i].deg * Math.PI) / 180)
          // 填充内容
          ctx.fillText(chars[i].str, -10, 8)
          ctx.restore()
        }

        // 生成干扰线
        this.makeLine(ctx, lines)
        // 生成干扰点
        this.makeDot(ctx, dots)
      }

      // 生成随机字母
      makeCode () {
        this.code = ''
        const strs = []
        const pool =
          'ABCDEFGHIJKLIMNOPQRSTUVWSYZabcdefghijklmnopqrstuvwxyz1234567890'

        for (let i = 0; i < this.len; i++) {
          const str = pool[this.makeNum(0, pool.length - 1)]
          this.code += str
          // 随机字体大小
          const fontSize = this.makeNum(20, 30)
          // 随机旋转度
          const deg = this.makeNum(-15, 35)
          strs.push({ str, fontSize, deg })
        }

        // 通知父组件更新
        _this.$emit('code', this.code)
        return strs
      }

      // 生成随机干扰线
      makeLine (ctx, lines) {
        const { makeNum, width, height } = this
        // 添加干扰线
        for (let i = 0; i < lines; i++) {
          ctx.beginPath()
          ctx.moveTo(makeNum(0, width), makeNum(0, height))
          ctx.lineTo(makeNum(0, width), makeNum(0, height))
          ctx.strokeStyle = this.makeColor(140, 230)
          ctx.closePath()
          ctx.stroke()
        }
      }

      // 生成随机圆点
      makeDot (ctx, dots) {
        const { makeNum, width, height } = this
        // 添加干扰点
        for (let i = 0; i < dots; i++) {
          ctx.beginPath()
          ctx.arc(
            makeNum(0, width),
            makeNum(0, height),
            makeNum(1, 2),
            0,
            2 * Math.PI
          )
          ctx.closePath()
          ctx.fillStyle = this.makeColor(150, 200)
          ctx.fill()
        }
      }

      // 生成随机数
      makeNum (min, max) {
        return Math.ceil(Math.random() * (max - min + 1) + min - 1)
      }

      // 生成随机背景色
      makeColor (min, max) {
        const { makeNum } = this
        return `rgb(${makeNum(min, max)}, ${makeNum(min, max)}, ${makeNum(
          min,
          max
        )})`
      }
    }

    const myVerify = new Verify({
      el: '#canvas',
      width: '74',
      height: '30',
      len: '4',
      lines: '3',
      dots: '6'
    })

    // 添加事件监听
    this.$bus.$on('refresh', val => {
      console.log('更新code')
      myVerify.init()
    })
  }
}
</script>
