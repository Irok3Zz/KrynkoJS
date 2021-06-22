class PrintMaсhine{
    constructor(newsize, newcolor, newfamily){
        this.fontsize = newsize
        this.fontcolor = newcolor
        this.fontfamily = newfamily
    }
    fontsize
    fontcolor
    fontfamily
    Print(text){
        document.write(`
        <span style="font-family: ${this.fontfamily}; color: ${this.fontcolor}; font-size: ${this.fontsize};">
            ${text}
        </span>
        `)
    }
}

let printer = new PrintMaсhine('x-large', 'blue', 'fantasy')
printer.Print(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ligula sapien, iaculis sit amet vehicula ac, scelerisque et felis. Phasellus vehicula velit sed odio ultrices pulvinar. Mauris scelerisque enim vel ante sollicitudin gravida. Mauris non velit non dui tristique tincidunt. Maecenas egestas ullamcorper justo sed ultrices. Suspendisse purus tortor, finibus ut ex a, tristique consequat diam. Suspendisse iaculis, enim in mattis iaculis, elit metus dictum ante, ut posuere dolor nisi quis orci. Nam nec augue cursus eros fringilla placerat ac eu purus. Nullam feugiat sagittis urna et malesuada. Curabitur non lobortis justo. Integer at mattis arcu. Aenean fringilla a metus vel fermentum. Donec non ultricies dolor. Ut feugiat fringilla justo eu pretium.

Sed tortor massa, interdum at erat ac, finibus maximus magna. Suspendisse velit nibh, egestas vel malesuada ut, accumsan quis nulla. Aenean vestibulum dolor elit, quis molestie enim pellentesque ac. Nulla eget turpis sed lorem suscipit commodo vitae nec velit. In id dolor a massa dictum fermentum et at nisl. Aenean pretium metus eu leo varius aliquet. Vestibulum posuere, lacus sit amet convallis tempus, nisi eros fringilla ante, tincidunt suscipit justo felis nec arcu. Proin eget risus et risus rhoncus imperdiet in lobortis enim.`)