
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
		selection = []
	};
	
	this.plt = [];

	return d;
}