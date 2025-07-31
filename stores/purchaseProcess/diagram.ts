import { defineStore } from 'pinia';
import type { DataStepDiagram } from "~/types/purchaseProcess";

export const DataDiagramStore = defineStore('DataDiagramStore', {
    state: () => <DataStepDiagram>({
        dataList: [
            { label: 'سبد خرید', route: '/checkout/cart', requiresCompletion: false },
            { label: 'پرداخت', route: '/checkout/payment', requiresCompletion: true },
            { label: 'اتمام خرید', route: '/checkout/complete', requiresCompletion: true },
        ],
        currentIndex: null, 
    }),

    actions: {
    
        resetSteps() {
            this.dataList[0].requiresCompletion = false
            this.dataList[0].requiresCompletion = true
            this.dataList[0].requiresCompletion = true
            this.currentIndex = null;
        },

        isStepCompleted(routePath: string, index: number): boolean {
            this.currentIndex = this.dataList.findIndex((step) => step.route === routePath);
            this.handleFinalPurchaseProcess();
            return index <= (this.currentIndex ?? 0);
        },

        updateStepsCompletion(index: number) {
            if (index < 3) {
                for (let i = 3; i < this.dataList.length; i++) {
                    this.dataList[i].requiresCompletion = true;
                }
            }
        },

        handleFinalPurchaseProcess() {
            if (this.currentIndex === this.dataList.length - 1) {
                this.dataList.forEach((step) => (step.requiresCompletion = true));
            }
        },

  
    },
});
