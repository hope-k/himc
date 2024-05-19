import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NumberFormat from 'react-number-format';
import { makeTransfer, resetTransferSuccess, resetTransferError } from '../../redux/Slices/transferSlice';
import { useNotifications } from 'reapop';
import { useNavigate } from 'react-router-dom';
import getSymbolFromCurrency from 'currency-symbol-map';
import accounting from 'accounting'
import Lottie from 'lottie-react';
import transferLoader from '../../animations/transferLoader.json';

const Transfer = () => {
  const navigate = useNavigate();
  const { notify } = useNotifications();
  const { error, loading, success } = useSelector((state) => state.transfer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error?.length) {
      error.forEach((err) => {
        notify(err, {
          title: 'An error occurred while trying to process your transaction',
          status: 'error',
          id: 'transfer',
        });
      });
      dispatch(resetTransferError());
    }
    if (success) {
      notify('Transaction Approved and is Being Processed', {
        title: 'Transaction Being Processed',
        status: 'success',
        id: 'transfer',
      });
      dispatch(resetTransferSuccess());
      navigate('/account/transactions');
    }
  }, [error, dispatch, notify, success, navigate]);

  useEffect(() => {
    if (loading) {
      notify('Processing Transaction...', 'loading', {
        dismissible: false,
        id: 'transfer',
      });
    }
  }, [loading, notify]);

  const { accounts } = useSelector((state) => state.accounts);
  const [payeeAccountNumber, setPayeeAccountNumber] = useState('');
  const [confirmAccountNumber, setConfirmAccountNumber] = useState('');
  const [payeeRoutingNumber, setPayeeRoutingNumber] = useState('');
  const [memo, setMemo] = useState('');
  const [amount, setAmount] = useState('');
  const [accountId, setAccountId] = useState(accounts?.[0]?._id);
  const selectedAccount = accounts?.find((account) => account._id === accountId);

  const submitHandler = (e) => {
    e.preventDefault();
    const transferDetails = {
      payeeAccountNumber,
      confirmAccountNumber,
      payeeRoutingNumber,
      memo,
      amount,
      accountId,
    };
    dispatch(makeTransfer(transferDetails));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900">Transfer Funds</h1>
        </div>
        <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={submitHandler}>
            <div>
              <label htmlFor="from" className="block text-sm font-medium text-gray-700">
                From:
              </label>
              <select
                onChange={(e) => setAccountId(e.target.value)}
                value={accountId}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
              >
                {accounts &&
                  accounts.map((account) => (
                    <option key={account._id} value={account._id}>
                      ...{account.accountNumber.slice(-4)} {account.accountType} {accounting.formatMoney(account.balance)}
                    </option>
                  ))}
              </select>
            </div>
            <div>
              <label htmlFor="routingNumber" className="block text-sm font-medium text-gray-700">
                Routing Number
              </label>
              <input
                id="routingNumber"
                name="routingNumber"
                type="number"
                required
                onChange={(e) => setPayeeRoutingNumber(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700">
                Account Number
              </label>
              <input
                id="accountNumber"
                name="accountNumber"
                type="number"
                required
                onChange={(e) => setPayeeAccountNumber(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="confirmAccountNumber" className="block text-sm font-medium text-gray-700">
                Confirm Account Number
              </label>
              <input
                id="confirmAccountNumber"
                name="confirmAccountNumber"
                type="number"
                required
                onChange={(e) => setConfirmAccountNumber(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="memo" className="block text-sm font-medium text-gray-700">
                Memo
              </label>
              <input
                id="memo"
                name="memo"
                type="text"
                onChange={(e) => setMemo(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                Amount {getSymbolFromCurrency(selectedAccount?.currency)}
              </label>
              <NumberFormat
                id="amount"
                name="amount"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                thousandsGroupStyle="thousand"
                prefix={getSymbolFromCurrency(selectedAccount?.currency) || '$'}
                decimalSeparator="."
                displayType="input"
                type="tel"
                thousandSeparator={true}
                onValueChange={(values) => setAmount(values.floatValue)}
              />
            </div>
            <div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                  loading ? 'bg-gray-400' : 'bg-teal-600 hover:bg-teal-700'
                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500`}
              >
                {loading ? (
                  <div className="w-6 h-6">
                    <Lottie animationData={transferLoader} style={{ height: '100%', width: '100%' }} />
                  </div>
                ) : (
                  'Send'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Transfer;
