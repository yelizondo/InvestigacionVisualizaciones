export class Utils 
{
	constructor()
	{
		this.seq_util = 	function(from,to,by)
		{	
			var _seq = [];

			for (var i = 0; i != to; i += by) 
			{
				_seq.push(i);
			}

			return _seq;
		}
	}

	seq(from,to,by)
	{
		return this.seq_util(from,to,by);
	}

}
