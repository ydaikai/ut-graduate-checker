```
extension/
├── manifest.json
├── background/
│   ├── background.js
│   └── (other background scripts)
├── content_scripts/
│   ├── content_script.js
│   └── (other content scripts)
├── popup/
│   ├── popup.html
│   ├── popup.js
│   └── (other popup resources)
├── options/
│   ├── options.html
│   ├── options.js
│   └── (other options resources)
└── (other resources)
```

- manifest.json: Chrome拡張機能のメタデータを定義するファイル。
- background/: バックグラウンドスクリプトを格納するディレクトリ。
- content_scripts/: コンテンツスクリプトを格納するディレクトリ。
- popup/: ポップアップウィンドウのHTMLとその制御用のPythonスクリプトを格納するディレクトリ。
- options/: オプションページのHTMLとその制御用のPythonスクリプトを格納するディレクトリ。
- (other resources): 拡張機能で使用するその他のファイルやリソースを格納するディレクトリ。例えば、画像、CSS、JavaScriptファイルなどです。
