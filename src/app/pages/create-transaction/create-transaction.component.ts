import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BlockchainService, IWalletKey } from '../../services/blockchain.service';
import { Transaction } from 'JsCoin/src/blockchain';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.scss']
})
export class CreateTransactionComponent implements OnInit {
  public newTransaction = new Transaction();
  public ownWalletKey: IWalletKey;

  constructor(private blockchainService: BlockchainService, private router: Router) {
    this.newTransaction = new Transaction();
    this.ownWalletKey = blockchainService.walletKeys[0];
  }

  ngOnInit() {
  }

  createTransaction() {
    const newTransaction = this.newTransaction;

    // Set the FROM address and sign the transaction
    newTransaction.fromAddress = this.ownWalletKey.publicKey;
    newTransaction.signTransaction(this.ownWalletKey.keyObject);

    try {
      this.blockchainService.addTransaction(this.newTransaction);
    } catch (e) {
      alert(e);
      return;
    }

    this.router.navigate(['/new/transaction/pending', { addedTransaction: true }]);
    this.newTransaction = new Transaction();
  }
}