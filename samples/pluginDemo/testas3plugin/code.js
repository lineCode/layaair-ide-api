
(function(window,document,Laya){
	var __un=Laya.un,__uns=Laya.uns,__static=Laya.static,__class=Laya.class,__getset=Laya.getset,__newvec=Laya.__newvec;

	var Box=laya.ui.Box,Button=laya.ui.Button,Event=laya.events.Event,Label=laya.ui.Label,Notice=ide.managers.Notice;
	var PluginDialog=laya.ide.plugin.PluginDialog,PluginPanel=laya.ide.plugin.PluginPanel;
	/**
	*...
	*@author ww
	*/
	//class laya.ide.plugin.as3plugin.TestPlugin extends laya.ide.plugin.PluginPanel
	var TestPlugin=(function(_super){
		function TestPlugin(){
			this.text=null;
			TestPlugin.__super.call(this);
			this.creatUI();
			this.init();
		}

		__class(TestPlugin,'laya.ide.plugin.as3plugin.TestPlugin',_super);
		var __proto=TestPlugin.prototype;
		__proto.creatUI=function(){
			this.text=new Label();
			this.text.color="#ff0000";
			this.addChild(this.text);
			this.text.top=this.text.bottom=this.text.left=this.text.right=0;
		}

		__proto.init=function(){
			Notice.listen("PropPanel_setByObj",this,this.initByObj);
			Notice.listen("openas3plugin",this,this.show);
			Notice.listen("closeas3plugin",this,this.close);
		}

		__proto.initByObj=function(data,name,id){
			var tKey;
			var tStr="";
			var lines=[];
			for (tKey in data){
				lines.push(tKey+":"+data[tKey]);
			}
			tStr=lines.join("\n");
			this.text.text=tStr;
		}

		return TestPlugin;
	})(PluginPanel)


	/**
	*...
	*@author ww
	*/
	//class laya.ide.plugin.as3plugin.TestPluginDialog extends laya.ide.plugin.PluginDialog
	var TestPluginDialog=(function(_super){
		function TestPluginDialog(){
			this.text=null;
			TestPluginDialog.__super.call(this);
			this.creatUI();
			this.init();
		}

		__class(TestPluginDialog,'laya.ide.plugin.as3plugin.TestPluginDialog',_super);
		var __proto=TestPluginDialog.prototype;
		__proto.creatUI=function(){
			var box;
			box=new Box();
			this.text=new Label();
			this.text.color="#ff0000";
			box.addChild(this.text);
			box.size(300,300);
			this.text.top=this.text.bottom=this.text.left=this.text.right=0;
			this.text.text="hello plugin Dialog";
			var btn;
			btn=new Button();
			btn.skin="comp/button.png";
			box.addChild(btn);
			btn.right=20;
			btn.bottom=5;
			btn.on(/*laya.events.Event.MOUSE_DOWN*/"mousedown",this,this.btnClick);
			/*no*/this.setContent(box);
		}

		__proto.btnClick=function(){
			this.close();
		}

		__proto.init=function(){
			Notice.listen("openas3Dialog",this,this.popup);
			Notice.listen("closeas3Dialog",this,this.close);
		}

		return TestPluginDialog;
	})(PluginDialog)



})(window,document,Laya);
