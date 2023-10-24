import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.scss']
})
export class OthersComponent implements OnInit{
  public menuItems = [
    {
      title: "計測メニュー",
      color: "#c7e7fe",
      options: [
        {
          item: "AI作業分析",
          link: "others",
          desc: "工程風景をカメラ撮影して指定した型式のAI作業分析・記録を行う"
        },
        {
          item: "ＱＲコードマスタ",
          link: "others",
          desc: "ＱＲコードフォーマット（文字数、並び）の設定をする画面"
        },
        {
          item: "システム設定",
          link: "others",
          desc: "カメラ設定、ＤＢ・動画保存先、HDD残量AIモデル読込etcの設定をする画面"
        }
      ]
    },
    {
      title: "履歴検索・動画再生",
      color: "#f4edad",
      options: [
        {
          item: "作業履歴",
          link: "others",
          desc: "作業記録を検索して、AI分析記録結果のデータ・グラフ表示と動画再生を行う"
        },
        {
          item: "要素作業別履歴",
          link: "others",
          desc: "特定要素を検索して作業記録を検索して、AI分析記録結果のデータ・グラフ表示と動画再生を行う"
        }
      ]
    },
    {
      title: "メンテナンス機能",
      color: "#fad0fb",
      options: [
        {
          item: "作業者マスタ登録",
          link: "others",
          desc: "システム管理者と組立作業者(一般)を登録する画面"
        },
        {
          item: "型式マスタ登録",
          link: "others",
          desc: "生産型式の登録削除する画面未登録型式はAI分析できません"
        },
        {
          item: "作業基準情報登録",
          link: "others",
          desc: "作業時間のバラツキ・差異を計算する基準値を登録する画面"
        },
        {
          item: "ＱＲコードマスタ",
          link: "others",
          desc: "ＱＲコードフォーマット（文字数、並び）の設定をする画面"
        },
        {
          item: "システム設定",
          link: "others",
          desc: "カメラ設定、ＤＢ・動画保存先、HDD残量AIモデル読込etcの設定をする画面"
        }
      ]
    }
  ];
  constructor(private router: Router) {}

  public ngOnInit(): void {
    
  }
  public link(path: string) {
    this.router.navigateByUrl(path);
  }
  
}
