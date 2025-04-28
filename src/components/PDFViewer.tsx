
import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

// Set up the worker source for PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

interface PDFViewerProps {
  pdfUrl: string;
  className?: string;
}

export const PDFViewer = ({ pdfUrl, className = '' }: PDFViewerProps) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
    setIsLoading(false);
  };

  const changePage = (offset: number) => {
    setPageNumber(prevPageNumber => {
      const newPageNumber = prevPageNumber + offset;
      return newPageNumber >= 1 && newPageNumber <= (numPages || 1) 
        ? newPageNumber 
        : prevPageNumber;
    });
  };

  return (
    <div className={`flex flex-col items-center ${className}`}>
      {isLoading && (
        <div className="flex items-center justify-center h-full w-full min-h-40">
          <Loader2 className="h-10 w-10 animate-spin text-primary/60" />
        </div>
      )}
      
      <Document
        file={pdfUrl}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={(error) => console.error("PDF load error:", error)}
        className="max-w-full"
        loading={
          <div className="flex items-center justify-center h-40">
            <Loader2 className="h-10 w-10 animate-spin text-primary/60" />
          </div>
        }
      >
        <Page 
          pageNumber={pageNumber} 
          className="shadow-lg rounded-lg overflow-hidden"
          renderTextLayer={false}
          renderAnnotationLayer={false}
          scale={1.0}
          loading={
            <div className="flex items-center justify-center h-40 w-full">
              <Loader2 className="h-8 w-8 animate-spin text-primary/60" />
            </div>
          }
        />
      </Document>
      
      {numPages && numPages > 0 && !isLoading && (
        <div className="flex items-center justify-between w-full mt-4 gap-4">
          <Button
            variant="outline" 
            onClick={() => changePage(-1)}
            disabled={pageNumber <= 1}
            className="hover-lift border-primary/30 bg-secondary/80"
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </Button>
          
          <p className="text-sm text-muted-foreground">
            Page {pageNumber} of {numPages}
          </p>
          
          <Button
            variant="outline"
            onClick={() => changePage(1)}
            disabled={pageNumber >= numPages}
            className="hover-lift border-primary/30 bg-secondary/80"
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  );
};
