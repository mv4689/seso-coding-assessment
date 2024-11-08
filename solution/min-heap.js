module.exports = class MinHeap {
    constructor(compareDates) {
      this.heap = [];
      this.compareDates = compareDates;
    }
  
    getLeftChildIndex(parentIndex) {
      return 2 * parentIndex + 1;
    }
  
    getRightChildIndex(parentIndex) {
      return 2 * parentIndex + 2;
    }
  
    getParentIndex(childIndex) {
      return Math.floor((childIndex - 1) / 2);
    }
  
    hasParent(index) {
      return this.getParentIndex(index) >= 0;
    }
  
    swap(index1, index2) {
      [this.heap[index1], this.heap[index2]] = [
        this.heap[index2],
        this.heap[index1],
      ];
    }

    size() {
        return this.heap.length;
    }

    isEmpty() {
        return this.heap.length === 0;
      }

    heapifyUp() {
        let currentIndex = this.heap.length - 1;
        while (
          this.hasParent(currentIndex) &&
          this.compareDates(this.heap[this.getParentIndex(currentIndex)], this.heap[currentIndex]) > 0
        ) {
          this.swap(this.getParentIndex(currentIndex), currentIndex);
          currentIndex = this.getParentIndex(currentIndex);
        }
    }

    heapifyDown() {
        let currentIndex = 0;
        while (this.getLeftChildIndex(currentIndex) < this.heap.length) {
          let smallerChildIndex = this.getLeftChildIndex(currentIndex);
          if (
            (this.getRightChildIndex(currentIndex) < this.heap.length) &&
            (this.compareDates(this.heap[this.getRightChildIndex(currentIndex)], this.heap[this.getLeftChildIndex(currentIndex)]) < 0)
          ) {
            smallerChildIndex = this.getRightChildIndex(currentIndex);
          }   
          if (this.compareDates(this.heap[currentIndex], this.heap[smallerChildIndex]) < 0) {
            break;
          } else {
            this.swap(currentIndex, smallerChildIndex);
          }
          currentIndex = smallerChildIndex;
        }
    }
  
    insert(value) {
      this.heap.push(value);
      this.heapifyUp();
    }
  
    removeMin() {
      if (this.heap.length === 0) {
        throw new Error("Heap is empty");
      }
      const minValue = this.heap[0];
      this.heap[0] = this.heap[this.heap.length - 1];
      this.heap.pop();
      this.heapifyDown();
      return minValue;
    }
  }