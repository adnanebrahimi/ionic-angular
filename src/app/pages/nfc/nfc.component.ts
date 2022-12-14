import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NFC, Ndef } from '@awesome-cordova-plugins/nfc/ngx';
import { Observable } from 'rxjs';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nfc.component.html',
  styleUrls: ['./nfc.component.scss'],
})
export class NFCComponent implements OnInit {
  public readerMode$!: Observable<any>;
  constructor(private nfc: NFC, private ndef: Ndef) {}
  ngOnInit(): void {
    // Read NFC Tag - Android
    // Once the reader mode is enabled, any tags that are scanned are sent to the subscriber
    let flags = this.nfc.FLAG_READER_NFC_A | this.nfc.FLAG_READER_NFC_V;
    this.readerMode$ = this.nfc.readerMode(flags);
  }
}
