import {Utils} from 'utils';
var utils = new Utils();

function BaseGraphics(w,h)
{
	this.d = [];

	this.dev = { 
		size = [w, h],
   		cra = [10.8, 14.4],
   		cin = [0.15, 0.20],
   		csi = 0.166, 
		cxy = [0.02604167, 0.03875969],
		din = [0, 0],
		res = 96,
		init = true
	};

	this.dev.din = [
		w / this.dev.res,
		h / this.dev.res
	];

   	this.def = {
		adj = 0.5,
		ann = true,
		bg = "transparent",
		bty = "o",
		cex = 0.83,
		cex_axis = 1,
		cex_lab = 1,
		cex_main = 1.2,
		cex_sub = 1,
		col = "black",
		col_axis = "black",
		col_lab = "black",
		col_main = "black",
		col_sub = "black",
		fg = "black",
		font = 1,
		font_axis = 1,
		font_lab = 1,
		font_main = 1, 
		font_sub = 1,
		gamma = null, 
		lab = [5,5,7], 
		las = 0, 
		lty = "solid", 
		lwd = 1, 
		mgp = [3,1,0],
		pch = 2,
		srt = 0, 
		tck = 0.03, 
		tcl = -0.5, 
		tmag = 0, 
		type= 0, 
		xaxp = [0,1,5], 
		xaxs = "r", 
		xaxt = "s", 
		xpd = false, 
		yaxp = [0,1,5],
		yaxs = "r", 
		yaxt = "s"
	};

	this.fig = {
		ask = false, 
		family = "", 
		fin = null, 
		lend = "round", 
		lheight = 1, 
		ljoin = "round", 
		lmitre = 10, 
		mai = [0.5, 0.5, 0.5, 0.5],
		mar = [5.1, 4.1, 4.1, 2.1], 
		mex = 1, 
		mfcol = [1,1], 
		mfg = [1,1,1,1], 
		mfrow = [1,1], 
		new = false, 
		oma = [0,0,0,0], 
		omd = [0,1,0,1], 
		omi = [0,0,0,0],
		pin = null, 
		ps = 12, 
		pty = "m", 
		usr = [0,1,0,1], 
		xlog = false, 
		ylog = false, 
		col = -1, 
		row = 0, 
		selection = [],
		xoff = 0,
		yoff = 0
	};
	
	this.plt = {
		xoff = 0,
		yoff = 0,
		usr = []
	};

	return d;
};

BaseGraphics.prototype.make_symbols = function() 
{
	var c = 0.275957512247;
	beginShape(); // is this syntax correct in p5? Need to check!
	vertex(-0.5,0.5);
	vertex(0.5,0.5);
	vertex(0.5,-0.5);
	vertex(-0.5,-0.5);
	vertex(-0.5,0.5);
	saveShape();
	beginShape();
	vertex(0,0.5);
	bezierVertex(c,0.5,0.5,c,0.5,0);
	vertex(0.5,0);
	bezierVertex(0.5,-c,c,-0.5,0,-0.5);
	vertex(0,-0.5);
	bezierVertex(-c,-0.5,-0.5,-c,-0.5,0);
	vertex(-0.5,0);
	bezierVertex(-0.5,c,-c,0.5,0,0.5);
	saveShape()
};

BaseGraphics.prototype.plot_new = function() 
{
	this.plt = this.def;

	if (this.dev.init) 
	{
		this.dev.init = false;
		this.resize(); // No estoy seguro de si esta llamada va a funcionar
	}

	if (this.fig.mfrow[0] == 1 && this.fig.mfrow[1] == 1)		 
	{
		this.fig.col = 0;
		this.fig.row = 0;
	}
	else if (this.fig.col < this.fig.mfrow[0]-1)
	{
		this.fig.col++;
	}
	else
	{
		this.fig.col = 0;
		this.fig.row++;
	}

	this.fig.xoff = (this.fig.omi[1]*(this.fig.col+1)+
		(this.fig.omi[2]+this.fig.fin[0])*this.fig.col)*
		this.dev.res;

	this.fig.yoff = 
		(this.fig.omi[1]*(this.fig.row+1)+
		 (this.fig.omi[3]+this.fig.fin[1])*this.fig.row)*
		this.dev.res;

	this.plt.xoff = this.dev.res*this.fig.mai[0];
	this.plt.yoff = this.dev.res*(this.fig.mai[1]+this.fig.pin[1]);
};

BaseGraphics.prototype.resize = function() 
{	
	this.fig.fin = [
		this.dev.din[0]/this.fig.mfrow[0]-this.fig.omi[0]-this.fig.omi[2],
		this.dev.din[1]/this.fig.mfrow[1]-this.fig.omi[1]-this.fig.omi[3]
	];

	this.fig.pin = [
		this.fig.fin[0]-this.fig.mai[0]-this.fig.mai[2],
		this.fig.fin[1]-this.fig.mai[1]-this.fig.mai[3]
	];
};

BaseGraphics.prototype.extent = function(args)
{
	if (args == null) 
	{
		args = {};
	}

	if (args.xlim != null) 
	{
		this.fig.xlim = args.xlim
	}

	if (args.ylim != null) 
	{
		this.fig.ylim = this.args.ylim
	}

	var xlim = this.fig.xlim
	var ylim = this.fig.ylim

	this.plt.usr = [xlim[0], xlim[1]-xlim[0], ylim[0], ylim[1]-ylim[0]]

	// VOY POR AQUI
	self.plt.xaxp = utils.seq(xlim[1],xlim[2],10/(xlim[2]-xlim[1]))
	self.plt.yaxp = utils.seq(ylim[1],ylim[2],10/(ylim[2]-ylim[1]))
	
	self.plt.xscl = self.fig.pin[1]/self.plt.usr[2]*self.dev.res
	self.plt.yscl = self.fig.pin[2]/self.plt.usr[4]*self.dev.res
};
