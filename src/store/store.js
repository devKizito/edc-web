import zustand from 'zustand';
import { devtools } from 'zustand/middleware';

let store = (set) => ({
  /**
   * Demand Notice ID
   **/
  demandID: '',
  setDemandID: (msg) => {
    set((state) => ({
      demandID: msg,
    }));
  },
  clearDemandID: (msg) => {
    set((state) => ({
      demandID: msg,
    }));
  },
  formValue: '',
  setFormValue: (val) => {
    set((state) => ({
      formValue: val,
    }));
  },

  clearFormValue: (val) => {
    set((state) => ({
      formValue: val,
    }));
  },

  /**
   * Form Value
   **/

  /**
   * Form Loading State
   **/
  isLoading: false,
  setLoading: (loading) => {
    set((state) => ({
      isLoading: loading,
    }));
  },
  /**
   *  Loading API Data
   **/
  apiData: null,
  setApiData: (data) => {
    set((state) => ({
      apiData: data,
    }));
  },
  clearApiData: (data) => {
    set((state) => ({
      apiData: null,
    }));
  },
  /**
   * API Bills
   * */
  bills: [],
  setBills: (bill) => {
    // set((state) => ({ bills: [...state.bills, bill] }));
    set((state) => ({ bills: bill }));
  },
  /**
   * API Taxpayer
   * */
  taxpayer: null,
  setTaxpayer: (data) => {
    set((state) => ({
      taxpayer: data,
    }));
  },

  /**
   * Error Messages Passed to Error Modals
   * */
  errorMessage: '',
  setErrorMessage: (error) => {
    set((state) => ({ errorMessage: error }));
  },

  /**
   * API Amount
   * */

  amount: '0.00',
  setAmount: (value) => {
    set((state) => ({ amount: value }));
  },

  clearAllState: () => {
    set((state) => ({
      demandID: '',
      formValue: '',
      isLoading: false,
      apiData: null,
      bills: [],
      taxpayer: null,
      errorMessage: '',
      amount: '0.00',
    }));
  },
});

store = devtools(store);
export const useStore = zustand(store);
