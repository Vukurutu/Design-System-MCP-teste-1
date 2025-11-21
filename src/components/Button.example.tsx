import React from 'react';
import { Button } from './Button';

/**
 * Example Plus Icon Component
 */
const PlusIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

/**
 * Example Arrow Right Icon Component
 */
const ArrowRightIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

/**
 * Button Examples Component
 * Demonstrates all button variants and states
 */
export const ButtonExamples: React.FC = () => {
  const [loading, setLoading] = React.useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="p-8 space-y-12 bg-white">
      <section>
        <h2 className="text-2xl font-bold mb-6">Button Variants - Medium Size</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="linkSecondary">Link Secondary</Button>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Button Variants - Small Size</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" size="sm">Primary</Button>
          <Button variant="secondary" size="sm">Secondary</Button>
          <Button variant="outline" size="sm">Outline</Button>
          <Button variant="ghost" size="sm">Ghost</Button>
          <Button variant="link" size="sm">Link</Button>
          <Button variant="linkSecondary" size="sm">Link Secondary</Button>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Destructive Variants</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" destructive>Delete</Button>
          <Button variant="secondary" destructive>Remove</Button>
          <Button variant="outline" destructive>Cancel</Button>
          <Button variant="ghost" destructive>Discard</Button>
          <Button variant="link" destructive>Delete permanently</Button>
          <Button variant="linkSecondary" destructive>Remove all</Button>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">With Icons</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" leftIcon={<PlusIcon />}>
            Add Item
          </Button>
          <Button variant="secondary" rightIcon={<ArrowRightIcon />}>
            Next
          </Button>
          <Button variant="outline" leftIcon={<PlusIcon />} rightIcon={<ArrowRightIcon />}>
            Create New
          </Button>
          <Button variant="ghost" leftIcon={<PlusIcon />}>
            Add
          </Button>
          <Button variant="link" rightIcon={<ArrowRightIcon />}>
            Learn more
          </Button>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Button States</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary">Normal</Button>
          <Button variant="primary" disabled>
            Disabled
          </Button>
          <Button variant="primary" loading={loading} onClick={handleClick}>
            {loading ? 'Loading...' : 'Click to Load'}
          </Button>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Disabled States</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" disabled>Primary</Button>
          <Button variant="secondary" disabled>Secondary</Button>
          <Button variant="outline" disabled>Outline</Button>
          <Button variant="ghost" disabled>Ghost</Button>
          <Button variant="link" disabled>Link</Button>
          <Button variant="linkSecondary" disabled>Link Secondary</Button>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Loading States</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" loading>Loading</Button>
          <Button variant="secondary" loading>Processing</Button>
          <Button variant="outline" loading>Saving</Button>
          <Button variant="ghost" loading>Loading</Button>
          <Button variant="link" loading>Loading</Button>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Accessibility Example</h2>
        <div className="flex flex-wrap gap-4">
          <Button
            variant="primary"
            leftIcon={<PlusIcon />}
            aria-label="Add new item to cart"
          />
          <Button
            variant="secondary"
            rightIcon={<ArrowRightIcon />}
            aria-label="Go to next page"
          />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Full Width Example</h2>
        <Button variant="primary" className="w-full">
          Full Width Button
        </Button>
      </section>
    </div>
  );
};

export default ButtonExamples;
