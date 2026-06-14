export default {
    data() {
      return {
        toRotate: ["Tech Enthusiast", "Aspiring AI Engineer", "Climate Activist"],
        period: 2000,
        txt: "",
        loopNum: 0,
        isDeleting: false,
      };
    },
    mounted() {
      this.$nextTick(() => {
        this.tick();
      });
    },
    methods: {
      tick() {
        let typewriter = this.$refs.typewriter;
  
        if (!typewriter) {
          return;
        }
  
        let i = this.loopNum % this.toRotate.length;
        let fullTxt = this.toRotate[i];
  
        this.txt = this.isDeleting
          ? fullTxt.substring(0, this.txt.length - 1)
          : fullTxt.substring(0, this.txt.length + 1);
        typewriter.innerHTML = `<span class="wrap">${this.txt}</span>`;
  
        let that = this;
        let delta = 200 - Math.random() * 100;
  
        if (this.isDeleting) {
          delta /= 2;
        }
  
        if (!this.isDeleting && this.txt === fullTxt) {
          delta = this.period;
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === "") {
          this.isDeleting = false;
          this.loopNum++;
          delta = 500;
        }
  
        setTimeout(() => {
          that.tick();
        }, delta);
      },
    },
  };
  