Option Explicit
Dim r
r = MsgBox("aiXcoder检测到tray_windows_release.exe文件缺失，这极有可能是被杀毒软件误杀了。您可以点确定查看如何将aiXcoder的文件从杀毒软件的隔离区恢复。", 4, "aiXcoder")
If r = 6 Then
    Dim URL,WshShell,i
    URL = "https://www.aixcoder.com/#/Support?virustrust"
    Set WshShell = CreateObject("WScript.shell")
    WshShell.run "CMD /C start " & URL & "",0,False
End If