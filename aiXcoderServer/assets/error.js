!function(){"use strict";var e,n={1468:function(e,n,t){t(6916);var i=t(5532);t(9638),t(4039),t(8818),t(7654),window.bootstrap=i,t(5983),$(".alert-ui-fn_close").on("click",(function(){$(this).closest(".alert-ui").hide()})),$(".alert-ui-fn_close1").on("click",(function(){$(this).closest(".alert-ui1").hide()})),$(".alert-ui-fn_close_dbtn").on("click",(function(){$(this).closest(".alert-ui_dbtn").hide()}));var r=t(8997),o=t(8647),a=t.n(o),s=t(526),l=t.n(s),h=(t(5250),t(203),t(1106)),c=t.n(h),d=t(7290),u=t.n(d),p=t(7226);function g(){return(g=(0,r.Z)(a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,p.LK)("/config");case 2:f(e.sent.language||z(),n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e,n){localStorage.setItem("locale",e),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,n=z();l().locale(n),$("*").each((function(n,t){w(t,e)}))}(n)}function z(){var e=localStorage.getItem("locale");return null!=e&&e.indexOf("-")>=0&&(e=e.substring(0,e.indexOf("-"))),["en","zh"].indexOf(e)<0&&(e=navigator.language||navigator.browserLanguage||navigator.userLanguage),null!=e&&e.indexOf("-")>=0&&(e=e.substring(0,e.indexOf("-"))),e||"en"}function m(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),i=1;i<n;i++)t[i-1]=arguments[i];if(arguments.length>1)for(var r=0;r<t.length;r++)e=e.replace(new RegExp("\\{"+r+"\\}","gi"),(t[r]||"").toString());return e}l().extend(c()),l().extend(u());var y={greetings:{en:"Hello {0}!",zh:"{0} 您好！"},model:{en:"AI Engine",zh:"AI引擎"},expiry:{en:"Expiry",zh:"过期时间"},action:{en:"Action",zh:"动作"},login:{en:"Login",zh:"登录"},logout:{en:"Logout",zh:"登出"},enterpriseAccount:{en:"Enterprise Account",zh:"企业账号"},home:{en:"Home",zh:"主页"},selfTrain:{en:"Training AI Engine",zh:"AI引擎训练"},settings:{en:"Settings",zh:"设置"},codeSearch:{en:"Code Search",zh:"代码搜索"},support:{en:"Support",zh:"支持"},about:{en:"About",zh:"关于"},language:{en:"Language",zh:"语言"},port:{en:"Port",zh:"端口"},save:{en:"Save",zh:"保存"},indexingStatus:{en:"Indexing status:",zh:"索引状态："},expire:{en:"Expire {0}",zh:"将于{0}过期"},expired:{en:"Expired {0}",zh:"已经于{0}过期"},never:{en:"Never",zh:"不会过期"},purchaseExtend:{en:"Purchase/Extend Trial",zh:"购买/延长试用期限"},byNow:{en:"Buy now",zh:"立即购买"},notowned:{en:"Not Owned",zh:"未拥有"},trynow:{en:"Try it now",zh:"现在试用"},downloading:{en:"Downloading {0}%",zh:"下载中 {0}%"},download:{en:"Download",zh:"下载"},startDownloading:{en:"Starting download...",zh:"准备下载..."},header_statistics:{en:"Statistics",zh:"统计"},reset:{en:"reset",zh:"重置"},requires_login:{en:"AiXcoder Enterprise requires logging in",zh:"AiXcoder企业版需要登录"},username:{en:"Username",zh:"用户名"},password:{en:"Password",zh:"密码"},loginFailedTitle:{en:"Log in failed",zh:"登录失败"},userLoginError4009:{en:"The number of the activated machines by this account have reached the limit. You can deactivate unused machiens in the account management portal.",zh:"在此账号上登录的机器数量已经达到了上限。您可以在账户管理平台解绑不使用的机器。"},userLoginError3000:{en:"The license is invalid, please contact administrator.",zh:"无效的授权信息，请联系管理员。"},loginFailed:{en:"Log in failed: {0}",zh:"登录失败：{0}"},logoutFailed:{en:"Log out failed: {0}",zh:"登出失败：{0}"},logged_in_as:{en:"Enterprise User Logged In As:",zh:"企业用户登录为："},enterpriseAuthorizeEndpoint:{en:"Manage account...",zh:"管理账号..."},QuestionFeedback:{en:"Question feedback",zh:"问题反馈"},theLogFile:{en:"We are going to send this log file to aiXcoder:",zh:"我们将把这个日志文件发送给aiXcoder服务器："},send:{en:"Send",zh:"发送"},sending:{en:"Sending",zh:"发送中"},sendSuccess:{en:"Send successfully",zh:"发送成功"},sendFailed:{en:"Send failed",zh:"发送失败"},contact:{en:"Contact (E-mail/Skype/etc., optional): ",zh:"联系方式（E-mail/QQ/微信等，可选）："},comment:{en:'<span style="color: red;">*</span>Please describe what went wrong (if you want to show screenshots or screen recording, please send them as attachments in E-mail to support@aixcoder.com):',zh:'<span style="color: red;">*</span>请描述一下出问题的地方（如果需要附图或录屏，请作为附件发送邮件至support@aixcoder.com）：'},trainingIntroduction:{en:"AiXcoder local training service is a paid feature available on aiXcoder professional edition.<br>Upgrade now to use the unlimited features of local training service.",zh:"AiXcoder本地训练服务是一项付费功能。<br>升级为专业版之后可以使用不受限制的完整本地训练功能。"},localTrainingService:{en:"Personalized AI Engine Customization Service",zh:"个性化智能引擎定制服务"},startTrial:{en:"Start Free Trial...",zh:"开始免费试用..."},extendLicense:{en:"Extend License",zh:"续期授权"},"extendLicense...":{en:"Extend License...",zh:"续期授权..."},purchaseLicense:{en:"Purchase License...",zh:"购买授权..."},alreadyHaveActivationCode:{en:"I already have an activation code",zh:"我已经有了授权码."},enterUsername:{en:"Enter username:",zh:"用户名："},enterActivationCode:{en:"Enter activation code:",zh:"授权码："},forgetCode:{en:"I forgot my username or activation code...",zh:"我忘记了用户名或授权码..."},activate:{en:"Activate",zh:"激活"},error:{en:"An error occurred: {0}",zh:"发生了错误：{0}"},purchaseDoneError:{en:'<p>An error occurred: {0}.</p><p>If you have finished the purchase, please open <br><a target="_blank" href="https://aixcoder.com/en/#/OrderList">https://aixcoder.com/en/#/OrderList</a><br> and click "Offline Activate", and input the acquired user name and activation code.</p>{1}',zh:'<p>发生了错误：{0}。</p><p>如果您已经完成支付，请打开 <br><a target="_blank" href="https://aixcoder.com/#/OrderList">https://aixcoder.com/#/OrderList</a><br> 然后点击下方的“离线激活”，并输入获得的用户名和激活码。</p>{1}'},trialEnded:{en:"The trial has ended.",zh:"试用已经结束"},trialEndedAndBy:{en:"The trial has ended. If you need to continue to use it, please purchase the license.",zh:"试用已经结束，如需继续使用请购买授权。"},licensedTo:{en:"Licensed to {0}, expire {1}",zh:"授权给{0}，过期于{1}"},autoReload:{en:"Auto Reload",zh:"自动刷新"},project:{en:"The name of the AI engine (project name is recommended to use)",zh:"引擎名称（建议使用项目名称）"},project1:{en:"The name of the AI engine (project name is recommended to use)",zh:"智能引擎名称（建议使用所在项目的名称）"},directory:{en:"The directory to use this AI engine for",zh:"使用该引擎的项目目录"},dataProjectDir:{en:"The directory of files which was used to train AI engine with",zh:"已学习代码文件所在目录"},date:{en:"Date",zh:"日期"},status:{en:"Status",zh:"状态"},noData:{en:"No data",zh:"暂无数据"},cardTitleState1:{en:"Please confirm the information below",zh:"请确认本次训练任务"},cardTitleState2:{en:"Customize the AI engine with specific code",zh:"用任意指定代码，定制个性化智能引擎"},cardTitleStateImport:{en:"Import a Shared Model",zh:"导入共享模型"},newProjectName:{en:"Name of the AI engine (project name is used by default):",zh:"智能引擎的名称（默认使用项目名称）："},newProjectName2:{en:"Please specify a name for your customized AI engine:",zh:"请为您定制的智能引擎指定一个名称："},newProjectDir:{en:"The default directory to enable the trained AI engine:",zh:"该智能引擎的默认启用目录："},newProjectDir2:{en:"Specify which directory you want to enable the AI engine for:",zh:"请指明您要为“哪个文件目录下的项目”启用该引擎："},newProjectDir2Server:{en:"Specify project name/Git/SVN URL",zh:"请指明启用该引擎的项目名/Git/SVN的URL："},dataProjectDir1:{en:"The code files in this directory will be used for training:",zh:"将对该目录下的代码文件进行训练："},dataProjectDir2:{en:"Please select the directory with the code to train with:",zh:"请选择“要想训练的代码”所在的文件目录："},newProjectLanguage:{en:"Which programming language you want aiXcoder to train with in this directory:",zh:"您要对该目录中的哪种编程语言的代码进行训练："},selectFileDescription:{en:"Selected files:",zh:"已选择的代码文件："},newSelectFile:{en:"Select which files you want aiXcoder to train with in the above directory:",zh:"请选择要对上述目录中的哪些代码文件进行训练："},toTrainReadyErr:{en:"Some required fields are missing!",zh:"您有必填项未填写！"},notSelectFileErr:{en:"You did not select the files to train with!",zh:"您未添加要训练的代码文件！"},train:{en:"Confirm",zh:"确认"},selectTrainingFiles:{en:"Select Training Files...",zh:"添加要训练的代码文件..."},selectFiles:{en:"Click here to select the files for training",zh:"点击这里添加要训练的代码文件"},checkingLicense:{en:"Checking license...",zh:"检查授权..."},purchaseLink:{en:"<b style=\"color:red;\">Please do not close this window until you finish the payment.</b><br>If the purchase page does not open, you can click <a id='purchase-link' target='blank'>here</a>.",zh:"<b style=\"color:red;\">在支付完成前，请不要关闭这个页面</b><br>如果购买页面没有打开，您可以点击 <a id='purchase-link' target='blank'>这里</a>。"},afterFinish:{en:'When you have finished the payment, click "Done".',zh:"当您完成支付之后，请点击“完成”。"},done:{en:"Done",zh:"完成"},offlinePurchase:{en:"Offline Activate",zh:"离线激活"},cancel:{en:"Cancel",zh:"取消"},delete:{en:"Delete",zh:"删除"},lastFetched:{en:"Last refresh: {0}",zh:"最后更新时间：{0}"},trainDeleteConfirm:{en:"Are you sure to delete the AI engine for this project: {0}?",zh:"您确定要删除这个项目的AI引擎吗：{0}？"},editTitle:{en:"Modify model information",zh:"修改模型信息"},edit:{en:"Modify...",zh:"修改..."},localModelList:{en:"Trained AI Engines",zh:"已经训练的AI引擎"},trainNewModel:{en:"Advanced features: Customize personalized AI engine with specified code...",zh:"高级功能：用任意指定代码，定制个性化智能引擎..."},browse:{en:"Browse...",zh:"浏览..."},choose:{en:"Choose",zh:"选择"},licenseErrornull:{en:'Unexpected error occured. This is possibly due to your CPU not supporting AVX instruction set. <span t="AVXNotSupportedFix"></span>',zh:'未知的错误。这可能是由于您的CPU不支持AVX指令集所致。<span t="AVXNotSupportedFix"></span>'},licenseError1:{en:"Enterprise license has expired",zh:"企业授权已过期"},licenseError2:{en:"Personal license verification failed",zh:"个人授权认证失败"},licenseError3:{en:"Personal license has expired",zh:"个人授权已过期"},licenseError4:{en:"No license file found",zh:"没有找到授权信息"},"licenseError-2":{en:"Cannot reach aiXcoder server. AiXcoder professional trial requires internet access for validation. If you computer can connect to internet, please retry later.",zh:"无法连接上aiXcoder服务器。aiXcoder专业版试用需要联网校验。如果您的电脑可以连接互联网，请稍后重试。"},offlineActivationInstructions:{en:'<p>If your computer cannot connect to internet, or the openned web page cannot load normally, you can open <br>{0}<br> on another computer with internet connectivity, or scan the QRCode below, then click "Offline Activate", and input the acquired user name and activation code.</p><img src="{1}"/>',zh:'<p>如果您的电脑无法联网，弹出的页面无法正常加载，您可以在一台联网的机器上打开 <br>{0}<br> ，或者用手机扫描以下二维码，然后点击下方的“离线激活”，并输入获得的用户名和激活码。</p><img src="{1}"/>'},licenseErrorEnterprise:{en:'Failed to find a valid enterprise license file. Please login your enterprise account <a href="/">here</a>.',zh:'没有找到有效的企业版授权文件，请<a href="/">在这里</a>登录企业账号。'},licenseTo:{en:"Licensed to {0}, expires on {1}, {2}",zh:"授权给{0}，于{1}过期，{2}"},"too many source files":{en:"Only counts a part of the source files since they are many.",zh:"源文件较多，仅统计了部分"},"too many files":{en:"Only counts a part of the files since files are many.",zh:"文件较多，仅统计了部分"},"no source code file is found":{en:"Cannot find any source code file in this folder.",zh:"没有在这个目录找到任何源代码文件。"},"folder does not exist":{en:"The folder does not exist.",zh:"这个目录不存在。"},restartTraining:{en:"Restart Training...",zh:"重启训练..."},loadingTrainFileStatus:{en:'Listing files to train...<i class="fas fa-spinner fa-pulse"></i>',zh:'正在列出待训练的文件...<i class="fas fa-spinner fa-pulse"></i>'},trainFileStatus:{en:"Found {0} {1} files to train",zh:"找到{0}个待训练的{1}文件"},trainFileTooManyStatus:{en:"Found many {0} files to train",zh:"找到很多待训练的{0}文件"},paused:{en:"Paused",zh:"已暂停"},stopped:{en:"Stopped",zh:"已终止"},preparing:{en:"Preparing {0} <br />Remaining {1} <br />Elapsed {2}",zh:"正在准备 {0} <br />剩余时间 {1} <br />已用时 {2}"},training:{en:"Training {0} <br />Remaining {1} <br />Elapsed {2}",zh:"正在训练 {0} <br />剩余时间 {1} <br />已用时 {2}"},validating:{en:"Validating {0} <br />Remaining {1} <br />Elapsed {2}",zh:"正在校验 {0} <br />剩余时间 {1} <br />已用时 {2}"},downloadingNecessaryFiles:{en:"Downloading necessary files{0} {1} <br />Remaining {2} <br />Elapsed {3}",zh:"正在下载必要的文件{0} {1} <br />剩余时间 {2} <br />已用时 {3}"},downloadingModel:{en:"Downloading model {0} Remaining {1} Elapsed {2}",zh:"正在下载模型 {0} 剩余时间 {1} 已用时 {2}"},uploadingModel:{en:"Uploading model {0} Remaining {1} Elapsed {2}",zh:"正在上传模型 {0} 剩余时间 {1} 已用时 {2}"},finished:{en:"Finished",zh:"已完成"},failed:{en:"Failed",zh:"失败了"},resume:{en:"Resume",zh:"继续"},stop:{en:"Stop",zh:"终止"},pause:{en:"Pause",zh:"暂停"},cannotOpenFolder:{en:"Cannot open folder {0}",zh:"无法打开路径 {0}"},noTrainingFiles:{en:"Cannot find any {1} source file in {0}",zh:"没有在 {0} 里找到任何 {1} 的源代码"},dontHaveActivationCode:{en:"I don't have an activation code yet",zh:"我现在没有授权码"},doHaveActivationCode:{en:"I already have an activation code",zh:"我有授权码"},doHaveNewActivationCode:{en:"I have a new activation code",zh:"我有新的授权码"},back:{en:"Go back",zh:"返回"},sendEmailUrl:{en:"https://aixcoder.com/en/#/OrderList",zh:"https://aixcoder.com/#/OrderList"},loginOrderList:{en:"Previous purchases...",zh:"过往的购买记录..."},activeTrain:{en:"Start traininig now",zh:"立即启动训练任务"},active:{en:"Active",zh:"已启用"},disabled:{en:"Disabled",zh:"已禁用"},checkAll:{en:"Check all",zh:"全选"},clearAll:{en:"Clear all",zh:"全不选"},equProDir:{en:"<i>Same as the project directory</i>",zh:"<i>与项目目录相同</i>"},importedProDir:{en:"<i>Imported</i>",zh:"<i>导入的模型</i>"},updateProjInfoError3:{en:"New project directory conflicts an existing one.",zh:"新项目路径和已有的AI引擎冲突。"},updateProjInfoError4:{en:"Target directory does not exist. Are you sure to use this directory?",zh:"目标目录不存在。您确定要使用这个项目吗？"},updateProjInfoError5:{en:"No {0} source files are found. Are you sure to use this directory?",zh:"没有找到{0}语言的代码文件。您确定要使用这个项目吗？"},readAndAgreeAgreement:{en:"I have read and agree the <a target='_blank' href='https://www.aixcoder.com/help/agreement_en.html'>End-User License Agreement</a>.",zh:"我已阅读并同意<a target='_blank' href='https://www.aixcoder.com/help/agreement.html'>《最终用户使用协议》</a>。"},editProjectNameTooltip:{en:"You can change the displayed name here.",zh:"在这里可以修改用于显示的名称。"},editDirectoryTooltip:{en:"Trained AI engines match projects by project directories. If you have moved or renamed the project on disk, you can modify this path accordingly. ",zh:"训练好的AI引擎和项目之间用项目目录对应起来。如果您移动或改名了项目路径，您可以修改这个项目以匹配新的路径。否则请不要修改它。"},trainProjectDirTooltip:{en:"When you use aiXcoder to edit items in this directory, the engine is enabled by default.",zh:"当您使用aiXcoder对这个目录下的项目进行编辑时，这个引擎将被默认启用。"},dataProjectDirTooltip:{en:"AiXcoder will train a new AI engine using the code inside this directory. And then this new AI engine will be automatically loaded when developing projects inside the Project Directory",zh:"AiXcoder会使用这个目录中的代码训练成一个新的AI引擎。然后在在开发项目目录中的项目时，这个新AI引擎会被自动启用。"},trainProjectNameTooltip:{en:"The name is used to identify the AI engine.",zh:"智能引擎的名称起到标识的作用。"},trainProjectLanguageTooltip:{en:"AiXcoder's AI engines are language-dependent. If this project contains multiple languages, you need to train a AI engine for each language separately.",zh:"AiXcoder的AI引擎是编程语言相关的。如果这个项目包含多种编程语言，您需要对每一种语言分别训练。"},fileNotExist:{en:"A required file does not exist",zh:"一个必要文件不存在"},fileNotExistFix:{en:"You can try reinstalling the local service. Please refer to this for detailed instructions: https://github.com/aixcoder-plugin/doc/wiki/Troubleshooting#manual-server-installation",zh:"您可以尝试重新安装本地服务。具体流程可以参考这里：https://github.com/aixcoder-plugin/doc/wiki/Troubleshooting_CN#%E6%89%8B%E5%8A%A8%E5%AE%89%E8%A3%85%E6%9C%AC%E5%9C%B0%E6%9C%8D%E5%8A%A1"},fileHashMismatch:{en:"A file is corrupted",zh:"一个文件内容不正确"},fileHashMismatchFix:{en:"You can try reinstalling the local service. Please refer to this for detailed instructions: https://github.com/aixcoder-plugin/doc/wiki/Troubleshooting#manual-server-installation",zh:"您可以尝试重新安装本地服务。具体流程可以参考这里：https://github.com/aixcoder-plugin/doc/wiki/Troubleshooting_CN#%E6%89%8B%E5%8A%A8%E5%AE%89%E8%A3%85%E6%9C%AC%E5%9C%B0%E6%9C%8D%E5%8A%A1"},AVXNotSupported:{en:"Your CPU does not support AVX instructions",zh:"您的CPU不支持AVX指令集"},AVXNotSupportedFix:{en:"AiXcoder can only run on a computer with <a href='https://en.wikipedia.org/wiki/Advanced_Vector_Extensions#CPUs_with_AVX'>AVX-enabled CPUs</a>.",zh:"AiXcoder只能在<a href='https://en.wikipedia.org/wiki/Advanced_Vector_Extensions#CPUs_with_AVX'>支持AVX的CPU</a>上运行。"},not64bit:{en:"Your operating system is not 64-bit",zh:"您使用的不是64位的操作系统"},not64bitFix:{en:"AiXcoder can only run on a 64-bit computer.",zh:"AiXcoder只能在64位的操作系统上运行。"},trainFileHint:{en:"Projects often contain source files that should not be used in training. Those are usually auto-generated, copied from other places, or test data, etc.. Please only mark the hand-written source files.",zh:"项目经常包含一些不应该用于训练的代码文件。它们通常是自动生成的，从其他来源复制的，或测试用文件等等。请只勾选您需要手写的代码文件。"},gitIgnoreHint:{en:"AiXcoder respects Git ignore files (.gitignore). You can also use \".aixignore\" to specify more ignore patterns. <a target='_blank' href='https://github.com/aixcoder-plugin/doc/wiki/LocalTrainUsage_CN'>Learn more</a>",zh:"AiXcoder会识别Git忽略文件（.gitignore）。您也可以使用\".aixignore\"来指定更多的忽略模式。<a target='_blank' href='https://github.com/aixcoder-plugin/doc/wiki/LocalTrainUsage_CN#%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8%E5%BF%BD%E7%95%A5%E6%96%87%E4%BB%B6%E8%BF%87%E6%BB%A4%E9%9C%80%E8%A6%81%E8%AE%AD%E7%BB%83%E7%9A%84%E6%96%87%E4%BB%B6'>了解更多</a>"},guessProjectLanguageStatusWarning:{en:"This seems like a project with multiple languages. Please choose the language you want to train with this time.<br>",zh:"这个项目似乎包含多个编程语言。请选择您这次想要训练的语言。<br>"},clickHereToTrainNewModel:{en:"Click here to customize personalized AI engine with specified code",zh:"点击这里用任意指定代码，定制个性化智能引擎"},selectProjectDir:{en:"Select a project folder here",zh:"在这里选择项目路径"},selectLanguage:{en:"Select a language here",zh:"在这里选择项目语言"},startTraining:{en:"Start training",zh:"开始训练"},previousStep:{en:"Previous",zh:"上一步"},nextStep:{en:"Next",zh:"下一步"},skip:{en:"Skip",zh:"跳过"},showGuide:{en:"Show guide",zh:"显示向导"},trainItNow:{en:"Quickly confirm and start the training",zh:"快速确认并启动训练任务"},"filesCount.etc":{en:"{0}, etc. {1} files in total",zh:"{0} 等 {1} 个文件"},filesCount:{en:"{0}, {1} files in total",zh:"{0} 共 {1} 个文件"},manyFilesSelected:{en:"Many files are selected.",zh:"选择了许多文件。"},toBeTrained:{en:"To be trained",zh:"待训练"},"loading...":{en:"loading...",zh:"正在加载..."},"The project is not being trained.":{en:"The project is not being trained.",zh:"这个项目目前没有被训练。"},"The project is already being trained.":{en:"The project is already being trained.",zh:"这个项目已经在训练中了。"},"no training file found":{en:"No suitable source files were found.",zh:"没有找到可用于训练的源代码文件。"},"Training limit exceeded":{en:"Training limit has been exceeded.",zh:"已达到训练模型个数上限。"},configureAdaptive:{en:"Configure Adaptive Learning Data",zh:"配置自适应学习数据"},load:{en:"Continue from the previously trained engine",zh:"从上次训练的结果继续"},auto:{en:"Auto",zh:"自动"},manual:{en:"Train a new engine",zh:"训练全新的引擎"},"load-traintype-warning":{en:'Continuing from the previously trained engine might cause <b x-title="overfitting-explain">overfitting</b>. Please limit the total epoches to a reasonable number.',zh:'从上次训练的结果继续训练可能会导致<b x-title="overfitting-explain">过拟合</b>现象发生。请将总训练轮数控制在合理的范围内。'},"overfitting-explain":{en:"When a machine learning model overfits, its performance decreases on non-traininig data while the performance increases otherwise. For example, you might see the AI engine provides less accurate results overall but is exceptionally accurate when copying existing code patterns when the AI engine overfits. It is usually a bad sign but whether it is a desired behavior depends on you.",zh:"当一个机器学习模型过拟合时，它在非训练数据上的表现会降低，同时在训练数据上的表现会提升。比如说，当AI引擎过拟合时，你可能发现AI引擎提供的结果总体来说较之前更加不准确了，但是更能复制已有的代码。这通常是一个坏的表现，但它是否是你所期望的取决于你的具体使用情景。"},"manual-train-epoches":{en:"Epoches",zh:"轮数"},chooseTrainType:{en:"Training Type:",zh:"选择训练类型："},clickToShowLog:{en:"Click to show log",zh:"点击显示训练日志"},refresh:{en:"Refresh",zh:"刷新"},close:{en:"Close",zh:"关闭"},"train-epoches-warning-too-small":{en:"The epoches should not be lower than 1.<br>",zh:"训练轮数不能低于1。<br>"},"train-epoches-warning-too-large":{en:"The epoches being too many might lead to undesired overfitting, and longer training time.<br>",zh:"训练轮数过高可能会导致严重的过拟合现象，以及增加训练时间。<br>"},"train-epoches-warning-over-large":{en:"The epoches should not be higher than 20.<br>",zh:"训练轮数不能高于20。<br>"},noTrainFilesSelected:{en:"No files are selected for training.",zh:"没有选择训练用的文件"},uploadCode:{en:"Upload Code",zh:"上传代码"},basicModel:{en:"{0} Basic Model",zh:"{0} 基础模型"},newProjectModel:{en:"Which basic model you want aiXcoder to train from with the code in this directory:",zh:"您要以哪个模型为基础对该目录中的代码进行增量训练："},trainProjectModelTooltip:{en:"This is the starting point of aiXcoder's training. If your code is related to a specialized domain, please select the corresponding model as the starting point. Otherwise, you can just use the basic model, which is trained for general development of this language.",zh:"这是aiXoder训练的起点。如果您的代码与某个特定领域相关。请选择对应的模型。否则，您可以使用基础模型。基础模型对这个语言有泛用的支持。"},ok:{en:"Ok",zh:"确定"},"failed to download":{en:"Failed to download {0} to {1}",zh:"下载失败，从 {0} 到 {1}"},idleTrain:{en:"Train when computer is idle",zh:"在电脑空闲时自动训练"},importEnterpriseModel:{en:"Import Shared Model...",zh:"导入共享模型..."},"shareModel...":{en:"Share Model...",zh:"分享模型..."},shareModel:{en:"Share Model",zh:"分享模型"},name:{en:"Model Name",zh:"模型名"},"name:":{en:"Model Name: ",zh:"模型名："},sharemodelNameTooltip:{en:"A simple name, e.g. project name, for team members to tell what project this mode is for.",zh:"一个简单的，容易让团队成员判断这个模型的用途的名字。比如项目名。"},remark:{en:"Remark",zh:"注释"},"remark:":{en:"Remark: ",zh:"注释："},"group:":{en:"Group: ",zh:"组："},sharemodelGroupTooltip:{en:"The group to share with.",zh:"仅共享给组内成员。"},sharemodelRemarkTooltip:{en:"Additional message.",zh:"额外的信息。"},shareModelSuccess:{en:"Upload succeeded!",zh:"上传成功！"},shareModelError1:{en:"Upload failed. Cause: network error.",zh:"上传失败。原因：网络错误。"},shareModelError2:{en:"Upload failed. Cause: duplicated model name.",zh:"上传失败。原因：有重复的模型名。"},shareModelError3:{en:"Upload failed. Cause: unknown error.",zh:"上传失败。原因：未知错误。"},shareModelError4:{en:"Upload failed. Cause: not logged in.",zh:"上传失败。原因：没有登录。"},"listShareModelError-1":{en:"Failed to list shared models. Cause: {0}.",zh:"列出共享模型失败。原因：{0}。"},"listShareModelError-unknown":{en:"Failed to list shared models. Cause: {0}.",zh:"列出共享模型失败。原因：{0}。"},import:{en:"Import",zh:"导入"},mustSelectAModel:{en:"You must select a model to continue.",zh:"您必须选择一个模型"},group:{en:"Group",zh:"组"},uploader:{en:"Uploader",zh:"上传者"},upload:{en:"Upload",zh:"上传"},"importModelFailed-1":{en:"Failed to import model: {0}",zh:"导入模型失败：{0}"},importModelDone:{en:"Model is imported successfully",zh:"模型被成功导入"},importModelOverwriteConfirm:{en:"This will overwrite your existing model for this project, continue?",zh:"这会覆盖你本地已有的应用于这个项目的模型，继续吗？"},changelog:{en:"Changelog",zh:"更新日志"},changelogWithVersion:{en:"Changelog (Current version: {0})",zh:"更新日志（当前版本：{0}）"},checkUpdateWarning:{en:'Please make sure you are using the latest version of plugin. If not, you can see an "Update" button in Settings->Plugins->Installed page in IDEA for example.<img src="ideaupdate.png" alt="an update button is visible in plugins tab"/>',zh:'请确保您用的是最新版本的插件。如果不是的话，例如在IDEA中，您可以在Settings->Plugins->Installed页面看见一个“Update”按钮。<img src="ideaupdate.png" alt="在Plugins页面里可以看到Update按钮"/>'},confirmDeleteSharedModel:{en:"Are you sure to delete this shared model? This cannot be reverted.",zh:"您确定要删除这个共享模型吗？这无法被撤销。"},"userGroupError-1":{en:"Unknown error while fetching groups: {0}",zh:"获取组列表时遇到未知问题：{0}"},"userGroupError-2":{en:"You do not belong to any group. Models can only be shared within a group. Please contact the administrators to assign you to a group.",zh:"您不属于任何项目组。模型只能在项目组内分享。请联系管理员将你纳入某个组中。"},showTrayIcon:{en:"Tray/Menu Icon",zh:"托盘/菜单栏图标"},showTrayIconConfirm:{en:"You are now hiding the tray icon. It can later be displayed again through plugin's setting page or visit this webpage through URL again.",zh:"您将要隐藏托盘图标。托盘图标可以之后在插件的设置页面中或者通过URL访问此页面以重新显示。"}};function b(e,n){if(null==n)return n;if(e[n]){var t=e[n],i=z();t[i]&&(n=t[i])}for(var r=arguments.length,o=new Array(r>2?r-2:0),a=2;a<r;a++)o[a-2]=arguments[a];return m.apply(void 0,[n].concat(o))}function w(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:y,t=$(e);if(t.attr("t")){var i=b(n,t.attr("t"));t.html(i);var r=t.find("[t],[x-title],[x-data-intro]");r.each((function(e,t){return w(t,n)}))}if(t.attr("x-title")){var o=b(n,t.attr("x-title"));t.attr("title",o),t.attr("data-toggle","tooltip"),t.attr("data-html","true"),t.attr("data-placement","top");var a=$("<span class='hovertooltip fas fa-question-circle' aria-hidden='true'></span>");a.appendTo(t),t.tooltip()}if(t.attr("x-href")){var s=b(n,t.attr("x-href"));t.attr("href",s)}if(t.attr("x-data-intro")){var l=b(n,t.attr("x-data-intro"));t.attr("data-intro",l)}if(t.attr("x-placeholder")){var h=b(n,t.attr("x-placeholder"));t.attr("placeholder",h)}t.trigger("aix-render")}!function(e){g.apply(this,arguments)}();var v=new URL(window.location.href),A=v.searchParams.get("errorType"),E=v.searchParams.get("msg");$(".error-msg").hide(),$("#error"+A).show(),$("#detail").text(E)}},t={};function i(e){var r=t[e];if(void 0!==r)return r.exports;var o=t[e]={id:e,loaded:!1,exports:{}};return n[e].call(o.exports,o,o.exports,i),o.loaded=!0,o.exports}i.m=n,e=[],i.O=function(n,t,r,o){if(!t){var a=1/0;for(c=0;c<e.length;c++){t=e[c][0],r=e[c][1],o=e[c][2];for(var s=!0,l=0;l<t.length;l++)(!1&o||a>=o)&&Object.keys(i.O).every((function(e){return i.O[e](t[l])}))?t.splice(l--,1):(s=!1,o<a&&(a=o));if(s){e.splice(c--,1);var h=r();void 0!==h&&(n=h)}}return n}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[t,r,o]},i.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(n,{a:n}),n},i.d=function(e,n){for(var t in n)i.o(n,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},i.j=41,i.p="/",function(){i.b=document.baseURI||self.location.href;var e={41:0};i.O.j=function(n){return 0===e[n]};var n=function(n,t){var r,o,a=t[0],s=t[1],l=t[2],h=0;if(a.some((function(n){return 0!==e[n]}))){for(r in s)i.o(s,r)&&(i.m[r]=s[r]);if(l)var c=l(i)}for(n&&n(t);h<a.length;h++)o=a[h],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(c)},t=self.webpackChunkjsserver_web=self.webpackChunkjsserver_web||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}(),i.nc=void 0;var r=i.O(void 0,[351],(function(){return i(1468)}));r=i.O(r)}();